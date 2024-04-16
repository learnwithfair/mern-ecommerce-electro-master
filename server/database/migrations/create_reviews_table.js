const { Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minlenght: [3, "User name can be minimum 3 characters"],
      maxlenght: [31, "User name can be maximum 31 characters"],
    },
    email: {
      type: String,
      required: [true, "User name is required"],
      trim: true,      
      lowercase: true,
      validate: {
        validator: (v) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    review: {
      type: String,
      required: [true, "Review is required"],
      trim: true,
      minlenght: [3, "Review length can be minimum 3 characters"],
      maxlenght: [80, "Review can be maximum 80 characters"],
    },

    rating: {
      type: Number,
      required: [true, "Product Rating is required"],
      validate: {
        validator: (v) => {
          v > 0 && v <= 5;
        },
        message: (props) => {
          `${props.value} is not a valid. Product Ratting must be between 1 to 5`;
        },
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = reviewSchema;
