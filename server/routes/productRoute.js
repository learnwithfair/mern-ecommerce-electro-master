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
|                           Backend Routes
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/products/ -> [ Create, Show all ]
productRouter.prefix(
  "/admin/products",
  [isLoggedIn, isAdmin],
  async (product) => {
    product
      .route("/product/create")
      .post(
        upload.productImage,
        productValidate.formValidation,
        productController.create
      ); // Create product
    product.route("/product/show-all").get(productController.showAll); // Show all product
  }
);

module.exports = { productRouter };
