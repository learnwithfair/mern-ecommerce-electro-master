const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const { jwtLoginKey } = require("../../../resources/js/secret/secret");
const User = require("../../models/userModel");

// try 5 times within 15 minites
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 5, // Maximum 5 times
  message: "Too many  request from this api. Please try after sometime",
});

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.loginToken;
    if (!token) {
      throw createError(401, "User is already logged out. Please login first");
    }
    const decoded = jwt.verify(token, jwtLoginKey);
    if (!decoded) {
      throw createError(401, "Invalid Login Token");
    }
    const id = decoded.loginTokenData._id;
    const user = await User.findOne({ _id: id }).select("isBanned");
    if (!user) {
      res.clearCookie("loginToken");
      throw createError(
        409,
        "Your account is deleted by the authority. Please create a new account"
      );
    }
    if (user.isBanned) {
      res.clearCookie("loginToken");
      throw createError(
        401,
        "You are banned. Please contact with the authority"
      );
    }

    req.body.userId = decoded.loginTokenData._id;
    req.body.userEmail = decoded.loginTokenData.email;
    req.body.UserIsAdmin = decoded.loginTokenData.isAdmin;
    next();
  } catch (error) {
    next(error);
  }
};

const isLoggedOut = async (req, res, next) => {
  try {
    const token = req.cookies.loginToken;
    if (token) {
      throw createError(401, "User is already login. Please logout first");
    }
    next();
  } catch (error) {
    next(error);
  }
};
const isAdmin = async (req, res, next) => {
  try {
    if (!req.body.UserIsAdmin) {
      throw createError(
        402,
        "Forbidden. You must be an admin to access this resource."
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { limiter, isLoggedIn, isLoggedOut, isAdmin };
