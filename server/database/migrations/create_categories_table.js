const { Schema } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
      unique: true,
      minlenght: [3, "Category name can be minimum 3 characters"],
    },
    slug: {
      type: String,
      required: [true, "Category Slug is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = categorySchema;
