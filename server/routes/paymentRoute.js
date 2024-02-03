const express = require("express");
const paymentController = require("../app/http/controllers/paymentController");

const {
  isLoggedIn,
  isLoggedOut,
} = require("../app/http/middleware/authMiddleware");
const paymentRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Backend Routes                                |
|--------------------------------------------------------------------------
 */

// For Route localhost:3000/api/admin/categories/ -> [ Create, Show all ]

paymentRouter
  .route("/ssl-request")
  .post(paymentController.paymentRequest); // Create Category
paymentRouter
  .route("/ssl-payment-notification")
  .post(paymentController.notification); // Show all Category
paymentRouter
  .route("/ssl-payment-success")
  .post(paymentController.success); // Show all Category
paymentRouter.route("/ssl-payment-fail").post(paymentController.fail); // Show all Category
paymentRouter
  .route("/ssl-payment-cancel")
  .post(paymentController.cancel); // Show all Category

module.exports = { paymentRouter };
