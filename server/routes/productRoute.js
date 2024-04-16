const express = require("express");
const productController = require("../app/http/controllers/productController");
const productValidate = require("../app/http/requests/productFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
const upload = require("../app/helpers/imageHelper");
// const { productImage } = require("../app/helpers/imageHelper");
const productRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */
// For Route localhost:3000/api
productRouter.route("/products/show-all").get(productController.displayAll); // Show all product, Category & Brands For user
productRouter.route("/product-images").get(productController.showAllProductImages); // Show all product images
productRouter.route("/single-product-images/:id([0-9A-Fa-f]{24})").get(productController.showProductImagesByPdctId); // Show all product images by product id
productRouter.route("/product/show-all").get(productController.showAll); // Show all product

/*
|--------------------------------------------------------------------------
|                           Backend Routes
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/products/ -> [ Create, Show all ]
// productRouter.prefix(
//   "/admin/products",
//   [isLoggedIn, isAdmin],
//   async (product) => {
//     product
//       .route("/product/create")
//       .post(
//         upload.productImage,
//         productValidate.formValidation,
//         productController.create
//       ); // Create product
//     product.route("/product/show-all").get(productController.showAll); // Show all product
//   }
// );
productRouter.route("/product/add-to-cart").post(productController.addToCart);

module.exports = { productRouter };
