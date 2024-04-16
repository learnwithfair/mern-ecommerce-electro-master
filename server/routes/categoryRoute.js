const express = require("express");
const categoryController = require("../app/http/controllers/categoryController");
const categogyValidate = require("../app/http/requests/categoryFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const categoryRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */
 categoryRouter.route("/category/show-all").get(categoryController.showAll); // Show all Category
/*
|--------------------------------------------------------------------------
|                           Backend Routes
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/categories/ -> [ Create, Show all ]
// categoryRouter.prefix(
//   "/admin/categories",
//   [isLoggedIn, isAdmin],
//   async (category) => {
//     category
//       .route("/category/create")
//       .post(categogyValidate.formValidation, categoryController.create); // Create Category
//     category.route("/category/show-all").get(categoryController.showAll); // Show all Category
//   }
// );

module.exports = { categoryRouter };
