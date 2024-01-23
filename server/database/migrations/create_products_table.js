const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      unique: true,
      minlenght: [3, "Product name can be minimum 3 characters"],
    },
    slug: {
      type: String,
      required: [true, "Product Slug is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Product Description is required"],
      trim: true,
      minlenght: [3, "Product description length can be minimum 3 characters"],
      maxlenght: [80, "Product description can be maximum 80 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
      trim: true,
      validate: {
        validator: (v) => v > 0,
        message: (props) => {
          `${props.value} is not a valid price. Price must be greater than 0`;
        },
      },
    },
    quantity: {
      type: Number,
      required: [true, "Product Quantity is required"],
      trim: true,
      validate: {
        validator: (v) => {
          v > 0;
        },
        message: (props) => {
          `${props.value} is not a valid. Quantity must be greater than 0`;
        },
      },
    },
    sold: {
      type: Number,
      required: [true, "Product Quantity is required"],
      trim: true,
      default: 0,
      validate: {
        validator: (v) => v > 0,
        message: (props) => {
          `${props.value} is not a valid sold quantity. It must be greater than 0`;
        },
      },
    },
    shipping: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    cat_id: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      // required: [true, "Category name is required"],
      default: "default-image",
    },
  },

  { timestamps: true }
);

module.exports = productSchema;
