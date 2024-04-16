const { Schema } = require("mongoose");

const logoSchema = new Schema(
  {
    logo: {
      type: String,
      required: [true, "Logo is required"],
    },
    location: {
      type: String,
      default: "F-Header",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = logoSchema;
