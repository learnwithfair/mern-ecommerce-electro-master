const createError = require("http-errors");
const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const serviceProvider = require("../../providers/responseServiceProvider");
const {
  jwtLoginKey,
  clientURL,
  BASE_URL,
  jwtResetPasswordKey,
} = require("../../../resources/js/secret/secret");
const { createJsonWebToken } = require("../../helpers/jwtHelper");
const bcrypt = require("bcryptjs");
const { update } = require("./userController");
const findByIdService = require("../../providers/findByIdServiceProvider");
const emailWithNodeMailer = require("../../helpers/emailHelper");
const { setLoginToken } = require("../../helpers/cookiesHelper");
const { deleteImage } = require("../../helpers/imageHelper");
const Logo = require("../../models/logoModel");

// Return Success Response
const successResponse = async (req, res, next) => {
  try {
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Successfully verified!",
    });
  } catch (error) {
    next(error);
  }
};


//User Login
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw createError(
        409,
        "User does't exist with this email. Please sign up then try again"
      );
    }

    const isPassordMatch = await bcrypt.compare(password, user.password);
    if (!isPassordMatch) {
      throw createError(401, "Email/Password did not match");
    }
    if (user.isBanned) {
      throw createError(
        401,
        "You are banned. Please contact with the authority"
      );
    }
    // create token
    const loginTokenData = {
      _id: user._id,
      isAdmin: user.isAdmin,
      email: user.email,
    };

    setLoginToken(res, loginTokenData); // Set Login cookies

    const userWithoutPasssword = user.toObject();
    delete userWithoutPasssword.password; // Delete password field from user object

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "User Login successfully.",
      payload: { userWithoutPasssword, loginTokenData },
    });
  } catch (error) {
    next(error);
  }
};

//User Logout
const userLogout = async (req, res, next) => {
  try {
    // Remove cookies
    res.clearCookie("loginToken");

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "User Logged out successfully.",
    });
  } catch (error) {
    next(error);
  }
};

// Change Password
const updatePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    // const updateId = "65be65b8cc394c72ba931ea2";
    const updateId = req.body.userId;

    const user = await findByIdService(User, updateId, { password: 1, _id: 0 });
    const isPassordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isPassordMatch) {
      throw createError(401, "Old Password did not match");
    }
    const updates = { password: newPassword };
    const updateOptions = { new: true, validators: true, context: "query" }; // User validators: true for automatic Schema validation
    const updatedUser = await User.findByIdAndUpdate(
      updateId,
      updates,
      updateOptions
    );
    if (!updatedUser) {
      throw new Error("Password change unsuccessfull");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Password is successfully changed.",
      // payload: { updatedUser },
    });
  } catch (error) {
    next(error);
  }
};

//Forgot Password
const forgotPassword = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw createError(
        409,
        "User does't exist with this email.Provide your correct email"
      );
    }

    const data = { _id: user.id, email: user.email };
    const token = createJsonWebToken(data, jwtResetPasswordKey, "15m");

    // Prepare Email

    const ForgotEmailData = {
      email,
      subject: "Forgot Your account's Password Email",
      html: `
      <h2>Hello! ${user.name}</h2>
      <p>Please click here to <a href="${BASE_URL}/api/auth/reset-password?token=${token}" target="_blank"> <button style="color:green;">Change Password</button></a></p>
      `,
    };
    // send wmail with nodemailer
    try {
      // await emailWithNodeMailer(ForgotEmailData);
    } catch (Emailerror) {
      next(createError(500, "Failed to send verification email"));
      return;
    }

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: `Please check your Gmail ID: ${email} for Change your Account Password`,
      payload: { token },
    });
  } catch (error) {
    next(error);
  }
};

//Activate Forgot Account's Passowrd
const resetPassword = async (req, res, next) => {
  try {
    const { confirmPassword } = req.body;
    const token = req.params.token;

    if (!token) {
      throw createError(404, "Token Not Found");
    }
    try {
      const decoded = jwt.verify(token, jwtResetPasswordKey);
      if (!decoded) {
        throw createError(401, "Unable to verify Password");
      }
      const updateId = decoded._id;
      const updates = { password: confirmPassword };
      const updateOptions = {
        new: true,
        validators: true,
        context: "query",
      }; // User validators: true for automatic Schema validation
      const updatedUser = await User.findByIdAndUpdate(
        updateId,
        updates,
        updateOptions
      );
      if (!updatedUser) {
        throw new Error("Password change unsuccessfull");
      }

      req.body.email = updatedUser.email;
      req.body.password = confirmPassword;
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

// Get user by ID
const profile = async (req, res, next) => {
  try {
    // const id = "65be65b8cc394c72ba931ea2";
    const id = req.body.userId;
    // console.log(id);
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
// Get user by ID
const profileAndLogoDisplay = async (req, res, next) => {
  try {
    // const id = "65be65b8cc394c72ba931ea2";
    const id = req.body.userId;
    // console.log(id);
    const options = { name: 1, image: 1, isAdmin: 1, _id: 0 };
    const user = await findByIdService(User, id, options);

    const logos = await Logo.find({ isActive: true }, { logo: 1, location: 1 });
    if (!logos || logos.length == 0) {
      throw createError(404, "Logo Not Found");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "User and Logos: ",
      payload: { user, logos },
    });
  } catch (error) {
    next(error);
  }
};

// Update Profile Info
const updateProfileInfo = async (req, res, next) => {
  try {
    // const updateId = req.params.id;

    // const updateId = "65be65b8cc394c72ba931ea2";
    const updateId = req.body.userId;
    const updateOptions = { new: true, validators: true, context: "query" }; // User validators: true for automatic Schema validation
    let updates = {};
    for (let key in req.body) {
      // if (["name", "city", "zip"].includes(key)) {
      if (["name"].includes(key)) {
        updates[key] = req.body[key];
      } else if (["phone", "address"].includes(key)) {
        updates[key] = req.body[key];
      } else if (["password"].includes(key)) {
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
// Delete user Account
const deleteUserAccount = async (req, res, next) => {
  try {
    // const id = "65bf226d62a1868b1aa05410";
    const id = req.body.userId;
    const user = await findByIdService(User, id);
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
  successResponse,
  userLogin,
  userLogout,
  updatePassword,
  forgotPassword,
  resetPassword,
  profile,
  profileAndLogoDisplay,
  updateProfileInfo,
  deleteUserAccount,
};
