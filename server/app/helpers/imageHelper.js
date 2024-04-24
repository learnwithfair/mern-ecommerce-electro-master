const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;

// =======================================================================
// Product Image Upload
const productImagePath = "public/images/products";
const allowedFileTypes = ["jpg", "png", "jpeg"];
const maxSize = 2 * 1024 * 1024; //2MB
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, productImagePath);
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const uniqueFileName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + extname;
    cb(null, uniqueFileName);
  },
});
const fileFilter = (req, file, cb) => {
  const extname = path.extname(file.originalname);
  if (!allowedFileTypes.includes(extname.substring(1))) {
    return cb(new Error("File type not allowed"), false);
  }
  cb(null, true);
};
const productImage = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
}).single("image");
// =======================================================================

// =======================================================================
// Logo Upload
const logoImagePath = "public/images/logos";
// const allowedFileTypes = ["jpg", "png", "jpeg"];
// const maxSize = 2 * 1024 * 1024; //2MB
const logoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, logoImagePath);
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const uniqueFileName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + extname;
    cb(null, uniqueFileName);
  },
});
// const logoFileFilter = (req, file, cb) => {
//   const extname = path.extname(file.originalname);
//   if (!allowedFileTypes.includes(extname.substring(1))) {
//     return cb(new Error("File type not allowed"), false);
//   }
//   cb(null, true);
// };
const logoImage = multer({
  storage: logoStorage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
}).single("logo");
// =======================================================================
// =======================================================================
// Profile Image Upload
const profileImagePath = "public/images/users";
const profileImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, profileImagePath);
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const uniqueFileName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + extname;
    cb(null, uniqueFileName);
  },
});
// const logoFileFilter = (req, file, cb) => {
//   const extname = path.extname(file.originalname);
//   if (!allowedFileTypes.includes(extname.substring(1))) {
//     return cb(new Error("File type not allowed"), false);
//   }
//   cb(null, true);
// };
const profileImage = multer({
  storage: profileImageStorage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
}).single("image");
// =======================================================================

// Delete Image
const deleteImage = async (imagePath) => {
  try {
    await fs.access(imagePath);
    await fs.unlink(imagePath);
    console.log("Image Deleted successfully");
  } catch (error) {
    console.error("Image does not exist");
  }
};

module.exports = { productImage, logoImage, profileImage, deleteImage };
