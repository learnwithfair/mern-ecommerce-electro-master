const express = require("express");
const userController = require("../app/http/controllers/userController");
const authController = require("../app/http/controllers/authController");
const userValidate = require("../app/http/requests/userFormRequest");

const {
  isLoggedIn,
  limiter,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const userRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */

// For Route /api-> [ User Process Register, User Activation, Show By ID, ]
userRouter.post(
  "/users/process-register",
  limiter,
  isLoggedOut,
  userValidate.formValidation,
  userController.processRegister
);
userRouter.get(
  "/users/verify/:token",
  limiter,
  isLoggedOut,
  userController.activateUserAccount,
  authController.userLogin
);
userRouter.get(
  "/users/show/:id([0-9A-Fa-f]{24})",
  isLoggedIn,
  userController.showById
); // id([0-9a-fA-F]{24})For mongoose validation

/*
|--------------------------------------------------------------------------
|                           For Grouping Routes
|--------------------------------------------------------------------------
 */
express.application.prefix = express.Router.prefix = function (
  path,
  middleware,
  configure
) {
  configure(userRouter);
  this.use(path, middleware, userRouter);
  return userRouter;
};
// /*
// |--------------------------------------------------------------------------
// |                           Backend Routes
// |--------------------------------------------------------------------------
//  */

// // For Route localhost:3000/api/admin/users -> [ Show all, Delete, Update ]
// userRouter.prefix("/admin/users", [isLoggedIn, isAdmin], async (user) => {
// userRouter.prefix("/admin/users", async (user) => {
//   user.route("/show-all").get(userController.showAll); // Show all users
//   user.route("/delete/:id").get(userController.deleteUser); // User Delete by ID
//   user
//     .route("/update/:id")
//     .put(userValidate.formValidation, userController.update); // User Update by ID
// });
// userRouter.route("/admin/users/show-all").get(userController.showAll); // Show all users
userRouter.get("/admin/users/show-all", isLoggedIn, isAdmin, userController.showAll); // Show all users
userRouter.put(
  "/admin/users/update/:id",
  isLoggedIn, isAdmin,
  userController.update,
  userController.showAll
);
module.exports = { userRouter };
