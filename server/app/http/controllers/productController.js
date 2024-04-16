const mongoose = require("mongoose");
const createError = require("http-errors");
const slugify = require("slugify");
const serviceProvider = require("../../providers/responseServiceProvider");
const Product = require("../../models/productModel");
const { deleteImage } = require("../../helpers/imageHelper");
const { setAddToCart } = require("../../helpers/cookiesHelper");
const Category = require("../../models/categoryModel");
const Brand = require("../../models/brandModel");
const ProductImage = require("../../models/productImageModel");


// Create Products
const create = async (req, res, next) => {
  // Change korte hobe
  try {
    const { name, description, price, quantity, sold, shipping, cat_id } =
      req.body;

    const slug = slugify(name.toLowerCase());
    let image = "default-image.jpg";
    if (req.file) {
      image = req.file.filename;
    }

    const productData = {
      name,
      slug,
      description,
      price,
      quantity,
      sold,
      shipping,
      image,
      cat_id,
    };

    const product = await Product.create(productData);
    if (!product) {
      if (req.file) {
        deleteImage(req.file.path);
      }
      createError(404, "Product Create Unsuccesfull");
    }

    return serviceProvider.successResponse(res, {
      statusCode: 201,
      message: "Product was created successfully",
      payload: { product },
    });
  } catch (error) {
    if (req.file) {
      deleteImage(req.file.path);
    }
    next(error);
  }
};

//show all Products for admin
const showAll = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort({ price: -1 }); // Show All Decending order
    // const products = await Product.find({}).select("name"); // Show All
    // const products = await Product.find({}).select("name"); // Show All
    // const products = await Product.find({}, { name: 1, price: 1, _id: 0 }); // Show All
    // const products = await Product.find({ price: { $ne: 1000 } }); // Show All

    if (!products || products.length == 0) {
      throw createError(404, "Product Not Found");
    }
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Products List: ",
      payload: { products },
    });
  } catch (error) {
    next(error);
  }
};

//show all Products for user
const displayAll = async (req, res, next) => {
  try {

    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;

    const searchRegExp = new RegExp(".*" + search + ".*", "i");
    const fillter = {
      isActive: { $ne: false },
      $or: [
        { productName: { $regex: searchRegExp } },
        { productDescpt: { $regex: searchRegExp } },
      ],
    };
    const count = await Product.find(fillter).countDocuments();
    const skip = ((page - 1) * limit) >= count ? 0 : (page - 1) * limit;
    const products = await Product.find(fillter, {})
      .limit(limit)
      .skip(skip).sort({ productPrice: 1 });
    // .skip((page - 1) * limit).sort({ productPrice: 1 });


    const paginations = {
      totalItem: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      previousPage: page - 1 > 0 ? page - 1 : null,
      nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
    };

    // const products = await Product.find({ isActive: { $ne: false } }) // Show All Decending order
    // const products = await Product.find({}).select("name"); // Show All
    // const products = await Product.find({}).select("name"); // Show All
    // const products = await Product.find({}, { name: 1, price: 1, _id: 0 }); // Show All
    // const products = await Product.find({ price: { $ne: 1000 } }); // Show All
    // =========================================================================

    const categories = await Category.find({ isActive: { $ne: false } });
    const brands = await Brand.find({ isActive: { $ne: false } });
    if (!products || products.length == 0) {
      throw createError(404, "Product Not Found");
    }
    if (!categories || categories.length == 0) {
      throw createError(404, "Category Not Found");
    }
    if (!brands || brands.length == 0) {
      throw createError(404, "Brand Not Found");
    }


    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "All Items List: ",
      payload: { products, categories, brands, paginations },
    });
  } catch (error) {
    next(error);
  }
};


//show all Product Images for Backent
const showAllProductImages = async (req, res, next) => {
  // try {
  //   const products = await ProductImage.find({}); // Show All Decending order
  //   const categories = await Category.find({ isActive: { $ne: false } });
  //   const brands = await Brand.find({ isActive: { $ne: false } });
  //   if (!products || products.length == 0) {
  //     throw createError(404, "Product Not Found");
  //   }
  //   if (!categories || categories.length == 0) {
  //     throw createError(404, "Category Not Found");
  //   }
  //   if (!brands || brands.length == 0) {
  //     throw createError(404, "Brand Not Found");
  //   }
  //   return serviceProvider.successResponse(res, {
  //     statusCode: 200,
  //     message: "Products List: ",
  //     payload: { products, categories, brands },
  //   });
  // } catch (error) {
  //   next(error);
  // }
};


//show all Product Images by Product ID
const showProductImagesByPdctId = async (req, res, next) => {
  try {
    const productId = (req.params.id);
    // Display all image by product id
    const productImages = await ProductImage.find({ productId });

    const r = typeof (productId);
    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Product images List: ",
      payload: { productImages },
    });
  } catch (error) {
    next(error);
  }
};

//addToCart Products
const addToCart = async (req, res, next) => {
  try {
    const data = req.body;
    setAddToCart(data);

    return serviceProvider.successResponse(res, {
      statusCode: 200,
      message: "Add To Cart List : ",
      payload: { data },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  showAll,
  displayAll,
  showAllProductImages,
  showProductImagesByPdctId,
  addToCart,
};
