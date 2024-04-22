const express = require("express");
const logoController = require("../app/http/controllers/logoController");
// const categogyValidate = require("../app/http/requests/categoryFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");

const upload = require("../app/helpers/imageHelper");
const logoRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Frontend Routes
|--------------------------------------------------------------------------
 */
// localhost:3000/api->[showHeaderLogo]
logoRouter.route("/logo/show-header-logo").get(logoController.showHeaderLogo); // Show Header Active Logo
/*
|--------------------------------------------------------------------------
|                           Backend Routes
|--------------------------------------------------------------------------
 */
// localhost:3000/api->[showHeaderLogo]
logoRouter.post("/admin/upload-logo", isLoggedIn, isAdmin, upload.logoImage, logoController.create); // Upload Logo
logoRouter.get("/admin/logos/show-all", isLoggedIn, isAdmin, logoController.showAll); // Show All Logo
logoRouter.put("/admin/update-logo-activation/:id([0-9A-Fa-f]{24})", isLoggedIn, isAdmin, logoController.handleIsActive, logoController.showAll); // Show Active Handle
logoRouter.delete(
  "/admin/delete-logo/:id([0-9A-Fa-f]{24})",
  isLoggedIn, isAdmin,
  logoController.deleteLogo,
  logoController.showAll
); // Delete Logo



module.exports = { logoRouter };
