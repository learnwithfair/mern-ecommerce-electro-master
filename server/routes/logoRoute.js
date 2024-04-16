const express = require("express");
const logoController = require("../app/http/controllers/logoController");
// const categogyValidate = require("../app/http/requests/categoryFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const logoRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */
 logoRouter.route("/category/show-all").get(logoController.showAll); // Show all Category
/*
|--------------------------------------------------------------------------
|                           Backend Routes
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/categories/ -> [ Create, Show all ]
// logoRouter.prefix(
//   "/admin/categories",
//   [isLoggedIn, isAdmin],
//   async (category) => {
//     category
//       .route("/category/create")
//       .post(categogyValidate.formValidation, categoryController.create); // Create Category
//     category.route("/category/show-all").get(categoryController.showAll); // Show all Category
//   }
// );

module.exports = { logoRouter };
