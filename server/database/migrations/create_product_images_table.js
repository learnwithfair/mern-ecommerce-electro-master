const { Schema } = require("mongoose");

const productImagesSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
   
    productImage: {
      type: String,
      required: [true, "Product images is required"],
    },
  },

  { timestamps: true }
);

module.exports = productImagesSchema;
