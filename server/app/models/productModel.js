const { model } = require("mongoose");
const productSchema = require("../../database/migrations/create_products_table");

const Product = model("Products", productSchema);
module.exports = Product;
