const express = require("express");
const brandController = require("../app/http/controllers/brandController");
// const categogyValidate = require("../app/http/requests/categoryFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const brandRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */
 brandRouter.route("/category/show-all").get(brandController.showAll); // Show all Category
/*
|--------------------------------------------------------------------------
|                           Backend Routes
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/categories/ -> [ Create, Show all ]
// brandRouter.prefix(
//   "/admin/categories",
//   [isLoggedIn, isAdmin],
//   async (category) => {
//     category
//       .route("/category/create")
//       .post(categogyValidate.formValidation, categoryController.create); // Create Category
//     category.route("/category/show-all").get(categoryController.showAll); // Show all Category
//   }
// );

module.exports = { brandRouter };
