import React, { useEffect, useReducer, useState } from "react";
import ProductWidgetForPayment from "../../../../components/product-widget-for-payment/ProductWidgetForPayment";
import { NavLink } from "react-router-dom";

import productData from "./productData.json";

export default function Cart() {
  const [cartCount, setCartCount] = useState(0);
  const [reducerValue, forceUpdate] = useReducer((x) => {
    if (x > 100) {
      x = 0;
      return x + 1;
    } else return x + 1;
  }, 0);
  const productWidgetforPayment = productData.map((product, index) => (
    <ProductWidgetForPayment
      key={index}
      productId={product.productId}
      productName={product.productName}
      productQuantity={product.productQuantity}
      productPrice={product.productPrice}
      productImage={product.productImage}
    />
  ));
  let totalAmount = 0;
  productData.map((product, i) => {
    totalAmount += product.productQuantity * product.productPrice;
  });

  if(!localStorage.getItem("cartCount")){
    localStorage.setItem("cartCount", 0);
  }
  useEffect(() => {    
    setCartCount(localStorage.getItem("cartCount"));    
    forceUpdate();   
  }, [reducerValue]);

  return (
    <>
      <div className="dropdown">
        <a
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="true"
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-shopping-cart"></i>
          <span>Your Cart</span>
          {/* <div className="qty">{productData.length}</div> */}
          {cartCount!=0 && (
            <div className="qty" id="cartCount">
              {cartCount}
            </div>
          )}
        </a>
        <div className="cart-dropdown">
          <div className="cart-list">{productWidgetforPayment}</div>
          <div className="cart-summary">
            <small>{productData.length} Item(s) selected</small>
            <h5>SUBTOTAL: ${totalAmount}</h5>
          </div>
          <div className="cart-btns">
            <a href="#">View Cart</a>

            <NavLink exact="true" to="/checkout">
              Checkout<i className="fa fa-arrow-circle-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
