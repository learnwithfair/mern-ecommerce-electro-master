const jwt = require("jsonwebtoken");
const { jwtLoginKey } = require("../../resources/js/secret/secret");
const { createJsonWebToken } = require("./jwtHelper");

const setLoginToken = async (res, loginTokenData) => {
  const loginToken = createJsonWebToken({ loginTokenData }, jwtLoginKey, "7d"); // [For 5 minute = "5m"]
  res.cookie("loginToken", loginToken, {
    // maxAge: 5 * 60 * 1000, // 5 minites (For 7 days = 7 * 24 * 60 * 60 * 1000)ms
    maxAge: 7 * 24 * 60 * 60 * 1000, // (For 7 days = 7 * 24 * 60 * 60 * 1000)ms
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

};

const setRefreshToken = async (req, res, next) => {
  const loggedInToken = req.cookies.loginToken;
  if (loggedInToken) {
    const decoded = jwt.verify(loggedInToken, jwtLoginKey);
    if (!decoded) {
      throw createError(401, "Invalid Login Token");
    }
    const loginTokenData = decoded.loginTokenData;
    setLoginToken(res, loginTokenData);
  }
  next();
};

const setAddToCart = async (res, addToCartData, next) => {
  res.cookie("addToCart", addToCartData, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    //  maxAge: 5 * 60 * 1000, // 5 minites (For 7 days = 7 * 24 * 60 * 60 * 1000)ms
  });
  next();
};

module.exports = { setLoginToken, setRefreshToken, setAddToCart };
