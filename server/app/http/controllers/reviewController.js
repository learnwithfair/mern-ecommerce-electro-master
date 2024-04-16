const createError = require("http-errors");
const slugify = require("slugify");
const serviceProvider = require("../../providers/responseServiceProvider");
const Review = require("../../models/reviewModel");

// // Create Review
// const create = async (req, res, next) => {

//   try {
//     const name = req.body.name;
//     const slug = slugify(name.toLowerCase());
//     const categoryExists = await Review.exists({ slug: slug });
//     if (categoryExists) {
//       throw createError(409, `${name} Review is already exits.`);
//     }

//     const categoryData = { name, slug: slug };
//     const Review = await Review.create(categoryData);
//     if (!Review) {
//       createError(404, "Review Create Unsuccesfull");
//     }

//     return serviceProvider.successResponse(res, {
//       statusCode: 201,
//       message: "Review was created successfully",
//       payload: { Review },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// //show all Categories
// const showAll = async (req, res, next) => {
//   try {
//     const categories = await Review.find({});
//     if (!categories || categories.length == 0) {
//       throw createError(404, "Review Not Found");
//     }
//     return serviceProvider.successResponse(res, {
//       statusCode: 200,
//       message: "Categories List: ",
//       payload: { categories },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

//show all Review by Product ID
const showAllByPrdctId = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    // Display all review by product id
    const reviews = await Review.find({ productId });


    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Review List: ",
      payload: { reviews },
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  // create,
  // showAll,
  showAllByPrdctId,
};
