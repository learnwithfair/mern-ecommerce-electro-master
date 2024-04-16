const express = require("express");
const authController = require("../app/http/controllers/authController");
const userValidate = require("../app/http/requests/userFormRequest");
const {
  limiter,
  isLoggedIn,
  isLoggedOut,
} = require("../app/http/middleware/authMiddleware");
const authRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Authentication Routes
|--------------------------------------------------------------------------
 */

// For Route /api/auth-> [Login, Logout, Change Password, Forgot Password, Reset Password,Profile]
authRouter.post(
  "/login",
  limiter,
  isLoggedOut,
  userValidate.loginValidation,
  authController.userLogin
);
authRouter.get(
  "/logout",
  // isLoggedIn,
  authController.userLogout
);
authRouter.put(
  "/change-password",
  // isLoggedIn,
  userValidate.updatePassowrdValidation,
  authController.updatePassword
);
authRouter.put(
  "/forgot-password",
  isLoggedOut,
  userValidate.forgotPasswordValidation,
  authController.forgotPassword
);
authRouter.put(
  "/reset-password/:token",
  limiter,
  isLoggedOut,
  userValidate.resetPassowrdValidation,
  authController.resetPassword,
  authController.userLogin
);
authRouter.get(
  "/profile",
  // isLoggedIn,
  authController.profile
);
authRouter.put(
  "/update-profile-contact-info",
  // isLoggedIn,
  userValidate.contactInfoProfileValidation,
  authController.updateProfileInfo
);
authRouter.put(
  "/update-profile-personal-info",
  // isLoggedIn,
  userValidate.personalInfoProfileValidation,
  authController.updateProfileInfo
);
authRouter.delete(
  "/delete-user-account",
  // isLoggedIn,
  authController.deleteUserAccount
);

module.exports = { authRouter };
