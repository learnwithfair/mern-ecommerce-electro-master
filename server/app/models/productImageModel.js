const { model } = require("mongoose");
const productImagesSchema = require("../../database/migrations/create_product_images_table");

const ProductImage = model("Product_images", productImagesSchema);
module.exports = ProductImage;
