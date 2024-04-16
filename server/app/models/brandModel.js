const { model } = require("mongoose");
const brandsSchema = require("../../database/migrations/create_brands_table");

const Brand = model("Brands", brandsSchema);
module.exports = Brand;
