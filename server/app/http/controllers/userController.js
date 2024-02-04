const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const serviceProvider = require("../../providers/responseServiceProvider");
const mongoose = require("mongoose");
const findByIdService = require("../../providers/findByIdServiceProvider");
const { deleteImage } = require("../../helpers/imageHelper");
const {
  jwtActivationKey,
  clientURL,
} = require("../../../resources/js/secret/secret");
const { createJsonWebToken } = require("../../helpers/jwtHelper");
const emailWithNodeMailer = require("../../helpers/emailHelper");

//Process Register
const processRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phone, address } = req.body;
    const name = firstName + " " + lastName;
    console.log(name);
    const userExists = await User.exists({ email: email });
    if (userExists) {
      throw createError(
        409,
        "User with this email already exist. Please login"
      );
    }
    const newUser = { name, email, password, phone, address };
    const token = createJsonWebToken(newUser, jwtActivationKey, "15m");

    // Prepare Email
    const emailData = {
      email,
      subject: "Account Activation Email",
      html: `
      <h2>Hello ${name} !</h2>
      <p>Please click here to <a href="${clientURL}/api/users/verify/${token}" target="_blank"> <button style="color:green;">Activate your accout</button></a></p>
      `,
    };
    // send wmail with nodemailer
    try {
      // await emailWithNodeMailer(emailData);
    } catch (Emailerror) {
      next(createError(500, "Failed to send verification email"));
      return;
    }

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: `Please go to your ${email} for completing your registration process`,
      payload: { token },
    });
  } catch (error) {
    next(error);
  }
};

//Activate Accout
const activateUserAccount = async (req, res, next) => {
  try {
    const token = req.params.token;
    // const token = req.query.token;
    if (!token) {
      throw createError(404, "Token Not Found");
    }
    try {
      const decoded = jwt.verify(token, jwtActivationKey);
      if (!decoded) {
        throw createError(401, "Unable to verify user");
      }
      const userExists = await User.exists({ email: decoded.email });
      if (userExists) {
        throw createError(
          409,
          "User with this email already exist. Please login"
        );
      }
      await User.create(decoded);
      req.body.email = decoded.email;
      req.body.password = decoded.password;
      next();
    } catch (error) {
      if (error.name == "TokenExpiredError") {
        throw createError(401, "Token has expired");
      } else if (error.name == "JsonWebTokenError") {
        throw createError(401, "Invalid Token");
      } else {
        throw error;
      }
    }
  } catch (error) {
    next(error);
  }
};

//show
const showAll = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;

    const searchRegExp = new RegExp(".*" + search + ".*", "i");
    const fillter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegExp } },
        { email: { $regex: searchRegExp } },
        { phone: { $regex: searchRegExp } },
      ],
    };
    const options = { password: 0 };
    const users = await User.find(fillter, options)
      .limit(limit)
      .skip((page - 1) * limit);

    const count = await User.find(fillter).countDocuments();

    if (!users || users.length == 0) {
      throw createError(404, "No users Found");
    }
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "User List: ",
      payload: {
        users,
        pagination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
const showById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };
    const user = await findByIdService(User, id, options);

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "User List: ",
      payload: { user },
    });
  } catch (error) {
    next(error);
  }
};

// Update user
const update = async (req, res, next) => {
  try {
    const updateId = req.params.id;
    const updateOptions = { new: true, validators: true, context: "query" }; // User validators: true for automatic Schema validation
    let updates = {};
    for (let key in req.body) {
      if (["name", "password", "phone", "address"].includes(key)) {
        updates[key] = req.body[key];
      }
    }
    const updatedUser = await User.findByIdAndUpdate(
      updateId,
      updates,
      updateOptions
    ).select("-password");
    if (!updatedUser) {
      throw new Error("User not Found");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Updated User: ",
      payload: { updatedUser },
    });
  } catch (error) {
    next(error);
  }
};
// DeleteF
const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await findByIdService(User, id);
    if (req.body.userId == id) {
      throw createError(
        401,
        "Can not delete itself. Please delete your account."
      );
    }
    const userImagePath = "public/images/users/" + user.image;
    deleteImage(userImagePath);

    await User.findByIdAndDelete({
      _id: id,
      // $and:[{_id:id},{isAdmin:false}]
    });

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "User Deleted successfully ",
    });
    // next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  processRegister,
  activateUserAccount,
  showAll,
  showById,
  deleteUser,
  update,
};
