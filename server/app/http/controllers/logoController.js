const createError = require("http-errors");
const serviceProvider = require("../../providers/responseServiceProvider");
const Logo = require("../../models/logoModel");
const findByIdService = require("../../providers/findByIdServiceProvider");
const { deleteImage } = require("../../helpers/imageHelper");

// Create Logo
const create = async (req, res, next) => {
  // Change korte hobe
  try {
    const location = req.body.location;
    const logo = req.file.filename;

    const logoData = {
      location,
      logo
    };

    const logoCreateData = await Logo.create(logoData);
    if (!logoCreateData) {
      if (req.file) {
        deleteImage(req.file.path);
      }
      createError(404, "Logo Create Unsuccesfull");
    }

    // return serviceProvider.successResponse(res, {
    //   statusCode: 201,
    //   message: "Logo was created successfully",
    //   payload: { logoCreateData },
    // });
    next();
  } catch (error) {
    if (req.file) {
      deleteImage(req.file.path);
    }
    next(error);
  }
};

//show all Categories
const showAll = async (req, res, next) => {
  try {
    const logos = await Logo.find({}).sort({ isActive: -1 });
    if (!logos) {
      throw createError(404, "Logo Not Found");
    }
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Logo List: ",
      payload: { logos },
    });
  } catch (error) {
    next(error);
  }
};

//Show Header Active Logo
const showHeaderLogo = async (req, res, next) => {
  try {
    const logo = await Logo.findOne({ $and: [{ location: "F-Header" }, { isActive: true }] }, { logo: 1 });
    if (!logo || logo.length == 0) {
      throw createError(404, "Logo Not Found");
    }
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Logo List: ",
      payload: { logo },
    });
  } catch (error) {
    next(error);
  }
};

// Logo is active handle
const handleIsActive = async (req, res, next) => {
  try {
    const updateId = req.params.id;
    const updateOptions = { new: true, validators: true, context: "query" }; // User validators: true for automatic Schema validation
    let updates = {};
    for (let key in req.body) {
      if (["isActive"].includes(key)) {
        updates[key] = req.body[key];
      }
    }
    const updatedLogo = await Logo.findByIdAndUpdate(
      updateId,
      updates,
      updateOptions
    ).sort({ isActive: -1 });
    if (!updatedLogo) {
      throw new Error("User not Found");
    }

    // return serviceProvider.successResponse(res, {
    //   statusCode: 200,
    //   message: "Updated Logo: ",
    //   payload: { updatedLogo },
    // });
    next();
  } catch (error) {
    next(error);
  }
};

// Delete Logo
const deleteLogo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const logo = await findByIdService(Logo, id);

    const logoImagePath = "public/images/logos/" + logo.logo;
    deleteImage(logoImagePath);

    await Logo.findByIdAndDelete({
      _id: id,
    });

    // return serviceProvider.successResponse(res, {
    //   statusCode: 200,
    //   message: "Logo Deleted successfully ",
    // });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  showAll,
  showHeaderLogo,
  handleIsActive,
  deleteLogo,
};
