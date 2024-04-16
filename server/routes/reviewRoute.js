const express = require("express");
const reviewController = require("../app/http/controllers/reviewController");
// const categogyValidate = require("../app/http/requests/categoryFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const reviewRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */
// For Route localhost:3000/api/review
reviewRouter.route("/show-by-prdct-id/:productId([0-9A-Fa-f]{24})").get(reviewController.showAllByPrdctId); // Show all Review by Product Id
/*
|--------------------------------------------------------------------------
|                           Backend Routes
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/categories/ -> [ Create, Show all ]
// reviewRouter.prefix(
//   "/admin/categories",
//   [isLoggedIn, isAdmin],
//   async (category) => {
//     category
//       .route("/category/create")
//       .post(categogyValidate.formValidation, categoryController.create); // Create Category
//     category.route("/category/show-all").get(categoryController.showAll); // Show all Category
//   }
// );

module.exports = { reviewRouter };
