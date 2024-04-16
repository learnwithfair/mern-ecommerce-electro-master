const createError = require("http-errors");
const slugify = require("slugify");
const serviceProvider = require("../../providers/responseServiceProvider");
const Logo = require("../../models/logoModel");

// Create Logo
const create = async (req, res, next) => {

  try {
    const name = req.body.name;
    const slug = slugify(name.toLowerCase());
    const categoryExists = await Logo.exists({ slug: slug });
    if (categoryExists) {
      throw createError(409, `${name} Logo is already exits.`);
    }

    const categoryData = { name, slug: slug };
    const Logo = await Logo.create(categoryData);
    if (!Logo) {
      createError(404, "Logo Create Unsuccesfull");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 201,
      message: "Logo was created successfully",
      payload: { Logo },
    });
  } catch (error) {
    next(error);
  }
};

//show all Categories
const showAll = async (req, res, next) => {
  try {
    const categories = await Logo.find({});
    if (!categories || categories.length == 0) {
      throw createError(404, "Logo Not Found");
    }
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Categories List: ",
      payload: { categories },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  showAll,
};
