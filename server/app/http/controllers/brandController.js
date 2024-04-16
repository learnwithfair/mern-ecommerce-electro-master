const createError = require("http-errors");
const slugify = require("slugify");
const serviceProvider = require("../../providers/responseServiceProvider");
const Brand = require("../../models/brandModel");

// Create Brand
const create = async (req, res, next) => {

  try {
    const name = req.body.name;
    const slug = slugify(name.toLowerCase());
    const categoryExists = await Brand.exists({ slug: slug });
    if (categoryExists) {
      throw createError(409, `${name} Brand is already exits.`);
    }

    const categoryData = { name, slug: slug };
    const Brand = await Brand.create(categoryData);
    if (!Brand) {
      createError(404, "Brand Create Unsuccesfull");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 201,
      message: "Brand was created successfully",
      payload: { Brand },
    });
  } catch (error) {
    next(error);
  }
};

//show all Categories
const showAll = async (req, res, next) => {
  try {
    const categories = await Brand.find({});
    if (!categories || categories.length == 0) {
      throw createError(404, "Brand Not Found");
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
