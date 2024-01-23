const { validationResult } = require("express-validator");
const { errorResponse } = require("../../providers/responseServiceProvider");
const { deleteImage } = require("../../helpers/imageHelper");

const runValidation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (req.file) {
        deleteImage(req.file.path);
      }
      message = errors.array()[0].msg;
      return errorResponse(res, {
        statusCode: 422,
        message: message,
      });
    }
    return next();
  } catch (error) {
    if (req.file) {
      deleteImage(req.file.path);
    }
    return next(error);
  }
};

module.exports = runValidation;
