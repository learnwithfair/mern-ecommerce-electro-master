const mongoose = require("mongoose");
const createError = require("http-errors");
const slugify = require("slugify");
const serviceProvider = require("../../providers/responseServiceProvider");
const Product = require("../../models/productModel");
const { deleteImage } = require("../../helpers/imageHelper");

// Create Products
const create = async (req, res, next) => {
  try {
    const { name, description, price, quantity, sold, shipping, cat_id } =
      req.body;

    const slug = slugify(name.toLowerCase());
    let image = "default-image.jpg";
    if (req.file) {
      image = req.file.filename;
    }

    const productData = {
      name,
      slug,
      description,
      price,
      quantity,
      sold,
      shipping,
      image,
      cat_id,
    };

    const product = await Product.create(productData);
    if (!product) {
      if (req.file) {
        deleteImage(req.file.path);
      }
      createError(404, "Product Create Unsuccesfull");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 201,
      message: "Product was created successfully",
      payload: { product },
    });
  } catch (error) {
    if (req.file) {
      deleteImage(req.file.path);
    }
    next(error);
  }
};

//show all Products
const showAll = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort({ price: -1 }); // Show All Decending order
    // const products = await Product.find({}).select("name"); // Show All
    // const products = await Product.find({}, { name: 1, price: 1, _id: 0 }); // Show All
    // const products = await Product.find({ price: { $ne: 1000 } }); // Show All

    if (!products || products.length == 0) {
      throw createError(404, "Product Not Found");
    }
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Products List: ",
      payload: { products },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  showAll,
};
