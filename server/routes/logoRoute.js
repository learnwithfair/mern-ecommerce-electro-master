const express = require("express");
const logoController = require("../app/http/controllers/logoController");
// const categogyValidate = require("../app/http/requests/categoryFormRequest");

const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
} = require("../app/http/middleware/authMiddleware");
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



module.exports = { logoRouter };
