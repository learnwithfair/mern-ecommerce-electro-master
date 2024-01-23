const createError = require("http-errors");
const slugify = require("slugify");
const Category = require("../../models/categoryModel");
const serviceProvider = require("../../providers/responseServiceProvider");

// Create Category
const create = async (req, res, next) => {
  try {
    const name = req.body.name;
    const slug = slugify(name.toLowerCase());
    const categoryExists = await Category.exists({ slug: slug });
    if (categoryExists) {
      throw createError(409, `${name} category is already exits.`);
    }

    const categoryData = { name, slug: slug };
    const category = await Category.create(categoryData);
    if (!category) {
      createError(404, "Category Create Unsuccesfull");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 201,
      message: "Category was created successfully",
      payload: { category },
    });
  } catch (error) {
    next(error);
  }
};

//show all Categories
const showAll = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    if (!categories || categories.length == 0) {
      throw createError(404, "Category Not Found");
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
