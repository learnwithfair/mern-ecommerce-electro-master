const createError = require("http-errors");
const SSLCommerzPayment = require("sslcommerz");
// const slugify = require("slugify");
// const Category = require("../../models/categoryModel");
// const serviceProvider = require("../../providers/responseServiceProvider");
const {
  clientURL,
  storeId,
  storePassword,
} = require("../../../resources/js/secret/secret");

// Create Category
const paymentRequest = async (req, res, next) => {
  try {
    /**
     * Create ssl session request
     */

    const data = {
      total_amount: req.body.total_amount,
      currency: "BDT",
      tran_id: "REF123",
      success_url: `${clientURL}/payment/ssl-payment-success`,
      fail_url: `${clientURL}/payment/ssl-payment-fail`,
      cancel_url: `${clientURL}/payment/ssl-payment-cancel`,
      shipping_method: "No",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "cust@yahoo.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      multi_card_name: "mastercard",
      value_a: "ref001_A",
      value_b: "ref002_B",
      value_c: "ref003_C",
      value_d: "ref004_D",
      ipn_url: `${clientURL}/payment/ssl-payment-notification`,
    };

    const sslcommerz = new SSLCommerzPayment(storeId, storePassword, false); //true for live default false for sandbox
    sslcommerz.init(data).then((data) => {
      //process the response that got from sslcommerz
      //https://developer.sslcommerz.com/doc/v4/#returned-parameters

      if (data?.GatewayPageURL) {
        return res.status(200).redirect(data?.GatewayPageURL);
      } else {
        throw createError(404, "Session was not successful");
      }
    });

    /////////////////////

    // const name = req.body.name;
  } catch (error) {
    next(error);
  }
};

//show all Categories
const notification = async (req, res, next) => {
  try {
    /**
     * If payment notification
     */

    return res.status(200).json({
      data: req.body,
      message: "Payment notification",
    });
  } catch (error) {
    next(error);
  }
};

//show all Categories
const success = async (req, res, next) => {
  try {
    /**
     * If payment successful
     */

    return res.status(200).json({
      data: req.body,
      message: "Payment success",
    });
  } catch (error) {
    next(error);
  }
};
//show all Categories
const fail = async (req, res, next) => {
  try {
    /**
     * If payment failed
     */

    return res.status(200).json({
      data: req.body,
      message: "Payment failed",
    });
  } catch (error) {
    next(error);
  }
};
//show all Categories
const cancel = async (req, res, next) => {
  try {
    /**
     * If payment cancelled
     */

    return res.status(200).json({
      data: req.body,
      message: "Payment cancelled",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  paymentRequest,
  notification,
  success,
  fail,
  cancel,
};
