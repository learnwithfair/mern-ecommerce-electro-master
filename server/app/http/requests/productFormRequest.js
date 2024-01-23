const { body } = require("express-validator");
const runValidation = require(".");

const formValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product Name is required")
    .isLength({ min: 3 })
    .withMessage("Product Name should be at least 3 characters long"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 3, max: 80 })
    .withMessage("Product description should be at least 3-80 characters long"),
  body("price")
    .trim()
    .notEmpty()
    .withMessage("Price is required")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("Please Provide a valid price (more than 0)");
      }
      return true;
    }),

  body("quantity")
    .trim()
    .notEmpty()
    .withMessage("Product quantity is required")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error(
          "Please Provide a valid Product quantity (more than 0)"
        );
      }
      return true;
    }),

  body("sold")
    .trim()
    .optional()
    .custom((value, { req }) => {
      if (value != "" && value < 0) {
        throw new Error(
          "Please Provide a valid Sold quantity (more than or equal 0)"
        );
      }
      return true;
    }),
  body("shipping").optional(),
  body("cat_id").trim().notEmpty().withMessage("Category name is required"),
  body("image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Product image is required");
    }
    return true;
  }),

  runValidation,
];

module.exports = {
  formValidation,
};
