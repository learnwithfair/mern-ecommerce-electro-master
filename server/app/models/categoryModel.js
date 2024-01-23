const { model } = require("mongoose");
const categorySchema = require("../../database/migrations/create_categories_table");

const Category = model("Categories", categorySchema);
module.exports = Category;
