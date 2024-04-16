const { body } = require("express-validator");
const runValidation = require(".");
// const runValidation = require("../app/http/requests");

const formValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3-31 characters long"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$.!%*#?&]/
    )
    .withMessage(
      "Pasword contain at least one uppercase, one lower case, one number, and one special character."
    ),

  body("phone").trim().notEmpty().withMessage("Phone Number is required"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ min: 3 })
    .withMessage("Password should be at least 3 characters long"),

  body("image").optional(),
  // body("image")
  //   .custom((value, { req }) => {
  //     if (!req.file) {
  //       throw new Error("Image is required");
  //     }
  //     return true;
  //   })
  //   .withMessage("Image is required"),

  runValidation,
];
const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$.!%*#?&]/
    )
    .withMessage(
      "Pasword contain at least one uppercase, one lower case, one number, and one special character."
    ),

  runValidation,
];
const updatePassowrdValidation = [
  body("oldPassword")
    .notEmpty()
    .withMessage("Old Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$.!%*#?&]/
    )
    .withMessage(
      "Pasword contain at least one uppercase, one lower case, one number, and one special character."
    ),
  body("newPassword")
    .notEmpty()
    .withMessage("New Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$.!%*#?&]/
    )
    .withMessage(
      "Pasword contain at least one uppercase, one lower case, one number, and one special character."
    ),

  // body("confirmPassword").custom((value, { req }) => {
  //   if (value != req.body.newPassword) {
  //     throw new Error("New and Confirm Password did not match");
  //   }
  //   return true;
  // }),

  runValidation,
];
const forgotPasswordValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),

  runValidation,
];
const resetPassowrdValidation = [
  body("newPassword")
    .notEmpty()
    .withMessage("New Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$.!%*#?&]/
    )
    .withMessage(
      "Pasword contain at least one uppercase, one lower case, one number, and one special character."
    ),

  body("confirmPassword").custom((value, { req }) => {
    if (value != req.body.newPassword) {
      throw new Error("New and Confirm Password did not match");
    }
    return true;
  }),

  runValidation,
];

const contactInfoProfileValidation = [
  body("phone").trim().notEmpty().withMessage("Phone Number is required"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ min: 3 })
    .withMessage("Password should be at least 3 characters long"),

  runValidation,
];
const personalInfoProfileValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3-31 characters long"),

  runValidation,
];
module.exports = {
  formValidation,
  loginValidation,
  updatePassowrdValidation,
  forgotPasswordValidation,
  resetPassowrdValidation,
  contactInfoProfileValidation,
  personalInfoProfileValidation,
};
