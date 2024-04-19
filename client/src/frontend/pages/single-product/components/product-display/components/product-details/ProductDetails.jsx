import React, { useContext } from "react";
import { UseContext } from "../../../../../../../helper/use-context/UseContext";
import { NavLink } from "react-router-dom";

import socialLinkData from "../../../../../../footer/sub-footer/social-link/data/SocialLinkData.json";
import RatingStars from "../../../../../../components/rating-stars/RatingStars";
import useFetchState from "../../../../../../../helper/use-fetch/useFetchState";
// import useFetch from "../../../../../../use-fetch/useFetch";

export default function ProductDetails() {
  const { product, category, brand } = useContext(UseContext);
  const { data, isLoading, error } = useFetchState(
    "api/review/show-by-prdct-id/" + product._id
  );
  const review = data != null && data.payload.reviews;

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

  const addToCart = (e) => {
    e.preventDefault();
    // let count = parseInt(localStorage.getItem("cartCount"));
    // localStorage.setItem("cartCount", count + 1);
    const qnt = document.getElementById("product-qty").value;
    const addCartListItem = {
      productId: product._id,
      productQuantity: qnt,
    };
    const cartList = JSON.parse(localStorage.getItem("cartList"));
    cartList.push(addCartListItem);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    // document.getElementById("cartCount").innerHTML = count + 1;
  };
  return (
    data != null && (
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
              <span className="product-available">In Stock {product.inStock}</span>
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
                <button className="add-to-cart-btn" onClick={addToCart}>
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
                  to={"/all-category?category=" + category.slug}
                >
                  <i> {category.name}</i>
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
    )
  );
}
