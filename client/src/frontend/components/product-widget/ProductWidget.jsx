import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductWidget(props) {
  const {
    productId,
    productName,
    productCategory,
    productPrice,
    productDiscount,
    productPublish,
    productImage,
  } = props;
  return (
    <>
      {/* <!-- product widget --> */}
      <div className="product-widget">
        <div className="product-img">
          <img src={productImage} alt=""></img>
          <div className="product-label">
            {productPublish != "" && (
              <span className="new">{productPublish}</span>
            )}
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">{productCategory}</p>
          <h3 className="product-name">
            <NavLink exact="true" to={"/single-product?id=" + productId}>
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
        </div>
      </div>
      {/* <!-- /product widget --> */}
      <hr style={{ border: "none", borderTop: "1px dashed #e4e7ed" }}></hr>
    </>
  );
}
