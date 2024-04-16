const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    catId: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: "brands",
    },
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      unique: true,
      minlenght: [3, "Product name can be minimum 3 characters"],
    },
    productSlug: {
      type: String,
      required: [true, "Product Slug is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    productDescpt: {
      type: String,
      required: [true, "Product Description is required"],
      trim: true,
      minlenght: [3, "Product description length can be minimum 3 characters"],
      maxlenght: [80, "Product description can be maximum 80 characters"],
    },
    productPrice: {
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
    productPublish: {
      type: String,
      default: "",
    },
    productDiscount: {
      type: Number,
      default: 0,
      validate: {
        validator: (v) => {
          v >= 0;
        },
        message: (props) => {
          `${props.value} is not a valid. Discount must be greater than or equal 0`;
        },
      },
    },
    productRating: {
      type: Number,
      default: 5,
      validate: {
        validator: (v) => {
          v > 0 && v <= 5;
        },
        message: (props) => {
          `${props.value} is not a valid. Product Ratting must be between 1 to 5`;
        },
      },
    },
    productSize: {
      type: String,
      required: [true, "Product Size is required"],
      trim: true,
    },
    productColor: {
      type: String,
      required: [true, "Product Color is required"],
      trim: true,
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
    sellCount: {
      type: Number,

      default: 0,
      validate: {
        validator: (v) => v >= 0,
        message: (props) => {
          `${props.value} is not a valid sold quantity. It must be greater than 0`;
        },
      },
    },

    productImage: {
      type: String,
      required: [true, "Product image is required"],
    },

    isActive: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },

  { timestamps: true }
);

module.exports = productSchema;
