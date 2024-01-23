const { body } = require("express-validator");
const runValidation = require(".");

const formValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isLength({ min: 3 })
    .withMessage("Category name can be minimum 3 characters"),

  runValidation,
];

module.exports = {
  formValidation,
};
