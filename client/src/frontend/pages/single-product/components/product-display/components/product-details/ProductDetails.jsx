import React, { useContext } from "react";
import { UseContext } from "../../../../../../use-context/UseContext";
import { NavLink } from "react-router-dom";

import socialLinkData from "../../../../../../footer/sub-footer/social-link/data/SocialLinkData.json";
import RatingStars from "../../../../../../components/rating-stars/RatingStars";

export default function ProductDetails() {
  const { product, category, brand, review } = useContext(UseContext);
  const colors = product.productColor.split(",");
  const size = product.productSize.split(",");

  const productRatingData = [];
  for (let i = 0; i < 5; i++) {
    if (i < product.productRating) {
      productRatingData[i] = <i key={i} className="fa fa-star"></i>;
    } else {
      productRatingData[i] = <i key={i} className="fa fa-star-o"></i>;
    }
  }
  return (
    <>
      {/* <!-- Product details --> */}
      <div className="col-md-5">
        <div className="product-details">
          <h2 className="product-name">{product.productName}</h2>
          <div>
            <div className="product-rating">
              <RatingStars star={product.productRating} />
            </div>
            <NavLink className="review-link" exact="true" to="#review-form">
              {review.length} Review(s) | Add your review
            </NavLink>
          </div>
          <div>
            <h3 className="product-price">
              $
              {product.productDiscount > 0
                ? product.productPrice -
                  product.productPrice * (product.productDiscount / 100) +
                  "  "
                : product.productPrice}
              {product.productDiscount > 0 && (
                <del className="product-old-price">
                  {"$" + product.productPrice}
                </del>
              )}
            </h3>
            <span className="product-available">In Stock</span>
          </div>
          <p style={{ textAlign: "justify" }}>{product.productDescpt}</p>

          <form action="" id="product-option" method="post">
            <div className="product-options">
              <label>
                Size
                <select className="input-select" id="product-size">
                  {size.map((size, i) => (
                    <option key={i} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Color
                <select className="input-select" id="product-color">
                  {colors.map((color, i) => (
                    <option key={i} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="add-to-cart">
              <div className="qty-label">
                Qty
                <div className="input-number">
                  <input type="number" defaultValue={1} id="product-qty" />
                  <span className="qty-up">+</span>
                  <span className="qty-down">-</span>
                </div>
              </div>
              <button className="add-to-cart-btn">
                <i className="fa fa-shopping-cart"></i> add to cart
              </button>
            </div>
          </form>

          <ul className="product-btns">
            <li>
              <a href="#">
                <i className="fa fa-heart-o"></i> add to wishlist
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-exchange"></i> add to compare
              </a>
            </li>
          </ul>

          <ul className="product-links">
            <li style={{ fontWeight: "bolder" }}>Category:</li>
            <li>
              <NavLink
                exact="true"
                to={"/all-category?category=" + category.catSlug}
              >
                <i> {category.catName}</i>
              </NavLink>
            </li>
            <li>||</li>
            <li style={{ fontWeight: "bolder" }}>Brand:</li>
            <li>
              <NavLink
                exact="true"
                to={"/all-category?brand=" + brand.brandSlug}
              >
                <i> {brand.brandName}</i>
              </NavLink>
            </li>
          </ul>

          <ul className="product-links">
            <li>Share:</li>
            {socialLinkData.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- /Product details --> */}
    </>
  );
}
