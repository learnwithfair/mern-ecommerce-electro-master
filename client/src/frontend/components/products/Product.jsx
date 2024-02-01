import React from "react";
import { NavLink } from "react-router-dom";
import RatingStars from "../rating-stars/RatingStars";

export default function Product(props) {
  const {
    productId,
    productSlug,
    productName,
    productPrice,
    productCategory,
    productPublish,
    productDiscount,
    productRating,
    productImage,
  } = props;

  // const addToCart = (e) => {
  //   e.preventDefault();
  //   let count = parseInt(localStorage.getItem("cartCount"));
  //   localStorage.setItem("cartCount", count + 1);
  //   console.log(count);
  //   // document.getElementById("cartCount").innerHTML = count + 1;
  // };
  return (
    <>
      {/* <!-- product --> */}
      <div className="product">
        <div className="product-img">
          <img src={productImage} alt=""></img>
          <div className="product-label">
            {productDiscount > 0 && (
              <span className="sale">-{productDiscount}%</span>
            )}
            {productPublish != "" && (
              <span className="new">{productPublish}</span>
            )}
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">{productCategory}</p>
          <h3 className="product-name">
            <NavLink exact="true" to={"/single-product/" + productSlug}>
              {productName}
            </NavLink>
          </h3>
          <h4 className="product-price">
            $
            {productDiscount > 0
              ? productPrice - productPrice * (productDiscount / 100) + "  "
              : productPrice}
            {productDiscount > 0 && (
              <del className="product-old-price">{"$" + productPrice}</del>
            )}
          </h4>
          <div className="product-rating">
            <RatingStars star={productRating} />
          </div>
          <div className="product-btns">
            <button className="add-to-wishlist">
              <i className="fa fa-heart-o"></i>
              <span className="tooltipp">add to wishlist</span>
            </button>
            <button className="add-to-compare">
              <i className="fa fa-exchange"></i>
              <span className="tooltipp">add to compare</span>
            </button>
            <button className="quick-view">
              <i className="fa fa-eye"></i>
              <span className="tooltipp">quick view</span>
            </button>
          </div>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">
            <i className="fa fa-shopping-cart"></i> add to cart
          </button>
        </div>
      </div>
      {/* <!-- /product --> */}
    </>
  );
}
