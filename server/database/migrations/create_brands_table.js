const { Schema } = require("mongoose");

const brandsSchema = new Schema(
  {
    brandName: {
      type: String,
      required: [true, "Brand name is required"],
      trim: true,
      unique: true,
    },
    brandSlug: {
      type: String,
      required: [true, "Brand Slug is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = brandsSchema;
