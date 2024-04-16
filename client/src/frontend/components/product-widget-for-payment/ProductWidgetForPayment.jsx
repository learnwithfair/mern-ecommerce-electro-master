import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductWidgetForPayment(props) {
  const {
    productId,
    productName,
    productSlug,
    productQuantity,
    productPrice,
    productImage,
  } = props;

  // Remove To Cart Item
  const removeItemToCart = (e) => {
    e.preventDefault();
    const cartList = JSON.parse(localStorage.getItem("cartList"));
    const cartItems = cartList.filter((item, i) => item.productId != productId);    
    localStorage.setItem("cartList", JSON.stringify(cartItems));
    successMessage("SUCCESSFULLY REMOVED");
  };

  // Get Current Path
  var current = location.pathname
    .split("/")
    .slice(-2)[0]
    .replace(/^\/|\/$/g, "");

  return (
    <>
      <div className="product-widget">
        <div className="product-img">
          {current != "single-product" ? (
            <img src={productImage} alt=""></img>
          ) : (
            <img src={"../" + productImage} alt=""></img>
          )}
        </div>
        <div className="product-body">
          <h3 className="product-name">
            <NavLink exact="true" to={"/single-product/" + productSlug}>
              {productName}
            </NavLink>
          </h3>
          <h4 className="product-price">
            <span className="qty">{productQuantity}x </span>${productPrice}.00
          </h4>
        </div>

        <button className="delete" onClick={removeItemToCart}>
          <i className="fa fa-close"></i>
        </button>
      </div>
      <hr style={{ border: "none", borderTop: "1px dashed #e4e7ed" }}></hr>
    </>
  );
}
