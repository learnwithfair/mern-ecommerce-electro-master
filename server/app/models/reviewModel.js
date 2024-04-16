const { model } = require("mongoose");
const reviewSchema = require("../../database/migrations/create_reviews_table");

const Review = model("Reviews", reviewSchema);
module.exports = Review;
