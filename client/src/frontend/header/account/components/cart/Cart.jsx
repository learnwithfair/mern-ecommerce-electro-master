import React, { useEffect, useReducer, useState } from "react";
import ProductWidgetForPayment from "../../../../components/product-widget-for-payment/ProductWidgetForPayment";
import { NavLink } from "react-router-dom";

// import productData from "./productData.json";
import productDatas from "../../../../../../../database/products.json";

export default function Cart() {
  const [cartCount, setCartCount] = useState(0);
  const [reducerValue, forceUpdate] = useReducer((x) => {
    if (x > 100) {
      x = 0;
      return x + 1;
    } else return x + 1;
  }, 0);
  // Set Bydefault local Storage

  if (!localStorage.getItem("cartList")) {
    localStorage.setItem("cartList", JSON.stringify([]));
  }
  if (!localStorage.getItem("totalAmount")) {
    localStorage.setItem("totalAmount", 0);
  }
  // Set Bydefault local Storage

  const cartList = JSON.parse(localStorage.getItem("cartList"));
  const productData = productDatas.filter(
    (product, i) => {
      for (let i = 0; i < cartList.length; i++) {
        console.log(cartList[i].productId);
        if (product._id.$oid == parseInt(cartList[i].productId)) {
          return true;
        }
      }
    }
    // cartList.filter((cart, i) => parseInt(cart.productId) === product._id.$oid)
  );
  // console.log(cartList[2].productId);
  //   console.log(raju);
  const productQuantity = 1;
  const productWidgetforPayment = productData.map((product, index) => (
    <ProductWidgetForPayment
      key={index}
      productId={product.productId}
      productName={product.productName}
      productQuantity={productQuantity}
      productPrice={
        product.productDiscount > 0
          ? product.productPrice -
            product.productPrice * (product.productDiscount / 100)
          : product.productPrice
      }
      productImage={product.productImage}
    />
  ));

  // const gneraterProductPrice = (productPrice, productDiscount) => {
  //   return productDiscount > 0
  //     ? productPrice - productPrice * (productDiscount / 100)
  //     : productPrice;
  // };
  let totalAmount = 0;
  productData.map((product, i) => {
    // totalAmount += productQuantity * product.productPrice;
    totalAmount +=
      productQuantity * product.productDiscount > 0
        ? product.productPrice -
          product.productPrice * (product.productDiscount / 100)
        : product.productPrice;
  });

  useEffect(() => {
    setCartCount(productData.length);
    localStorage.setItem("totalAmount", totalAmount);
    // setCartCount(localStorage.getItem("cartCount"));
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
          {cartCount != 0 && (
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
