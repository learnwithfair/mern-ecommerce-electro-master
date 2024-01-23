import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductWidgetForPayment(props) {
  const {
    productId,
    productName,
    productQuantity,
    productPrice,
    productImage,
  } = props;
  return (
    <>
      <div className="product-widget">
        <div className="product-img">
          <img src={productImage} alt=""></img>
        </div>
        <div className="product-body">
          <h3 className="product-name">
            <NavLink exact="true" to={"/single-product?id= " + productId}>
              {productName}
            </NavLink>
          </h3>
          <h4 className="product-price">
            <span className="qty">{productQuantity}x </span>${productPrice}
          </h4>
        </div>
        <button className="delete">
          <i className="fa fa-close"></i>
        </button>
      </div>
      <hr style={{ border: "none", borderTop: "1px dashed #e4e7ed" }}></hr>
    </>
  );
}
