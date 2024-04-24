const express = require("express");
const authController = require("../app/http/controllers/authController");
const userValidate = require("../app/http/requests/userFormRequest");
const {
  limiter,
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const upload = require("../app/helpers/imageHelper");
const authRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Authentication Routes
|--------------------------------------------------------------------------
 */

// For Route /api/auth-> [loginverification, Login, Logout, Change Password, Forgot Password, Reset Password,Profile]
authRouter.get(
  "/admin-login-verify",
  isLoggedIn, isAdmin,
  authController.successResponse
);
authRouter.get(
  "/user-login-verify",
  isLoggedIn,
  authController.successResponse
);
authRouter.get(
  "/logout-verify",
  isLoggedOut,
  authController.successResponse
);
authRouter.post(
  "/login",
  limiter,
  isLoggedOut,
  userValidate.loginValidation,
  authController.userLogin
);
authRouter.get(
  "/logout",
  isLoggedIn,
  authController.userLogout
);
authRouter.put(
  "/change-password",
  isLoggedIn,
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
  isLoggedIn,
  authController.profile
);

// For Admin Panel
authRouter.get(
  "/admin/profile-logo",
  isLoggedIn,
  authController.profileAndLogoDisplay
);
authRouter.put(
  "/update-profile-contact-info",
  isLoggedIn,
  userValidate.contactInfoProfileValidation,
  authController.updateProfileInfo
);
authRouter.put(
  "/update-profile-personal-info",
  isLoggedIn,
  userValidate.personalInfoProfileValidation,
  authController.updateProfileInfo
);
authRouter.put(
  "/update-profile-image",  
  upload.profileImage,
  isLoggedIn,
  authController.updateProfileImage
);
authRouter.delete(
  "/delete-user-account",
  isLoggedIn,
  authController.deleteUserAccount
);

module.exports = { authRouter };
