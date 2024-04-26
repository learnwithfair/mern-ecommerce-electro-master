import React, { useEffect, useReducer, useState } from "react";
import ProductWidgetForPayment from "../../../../components/product-widget-for-payment/ProductWidgetForPayment";
import { NavLink } from "react-router-dom";
import { io } from "socket.io-client";

import useFetchState from "../../../../../helper/use-fetch/useFetchState";

export default function Cart() {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );
  const [socket, setSocket] = useState(null);
  // Display All Product, Categories and Brands
  const { data, isLoading, error } = useFetchState("api/product/show-all");

  const products = data != null ? data.payload.products : null;
  const [reducerValue, forceUpdate] = useReducer((x) => {
    if (x > 100) {
      x = 0;
      return x + 1;
    } else return x + 1;
  }, 0);

  useEffect(() => {
    setSocket(io("http://localhost:8080"));
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    socket?.on("refresh", (data) => {
      setCartList(JSON.parse(localStorage.getItem("cartList")) || []);
      // setCartList(() => [...chat, data]);
    });
  }, [socket]);
  // Set default local Storage by first on load

  // if (!localStorage.getItem("cartList")) {
  //   localStorage.setItem("cartList", JSON.stringify([]));
  // }

  // Filtering Item which are included into cartlist
  const productData =
    products != null &&
    products.filter((product, i) => {
      for (let i = 0; i < cartList.length; i++) {
        if (product._id == cartList[i].productId) {
          product["productQuantity"] = parseInt(cartList[i].productQuantity);
          return true;
        }
      }
    });

  const productWidgetforPayment =
    products != null &&
    productData.map((product, index) => (
      <ProductWidgetForPayment
        key={index}
        productId={product._id}
        productName={product.productName}
        productSlug={product.productSlug}
        productQuantity={product.productQuantity}
        productPrice={
          product.productDiscount > 0
            ? product.productPrice -
              product.productPrice * (product.productDiscount / 100)
            : product.productPrice
        }
        productImage={product.productImage}
      />
    ));

  // Calculatting Total Amount for CartList Item
  let totalAmount = 0;
  products != null &&
    productData.map((product, i) => {
      totalAmount +=
        product.productQuantity *
        (product.productDiscount > 0
          ? product.productPrice -
            product.productPrice * (product.productDiscount / 100)
          : product.productPrice);
    });

  // useEffect(() => {
  //   setCartCount(productData.length);
  //   console.log(productData.length);
  // }, []);

  // Auto Refresh
  // useEffect(() => {
  //   setCartCount(productData.length);
  //   forceUpdate();
  // }, [reducerValue]);

  return (
    products != null && (
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
            {productData != null && (
              <div className="qty" id="cartCount">
                {productData.length}
              </div>
            )}
          </a>
          {/* stopPropagation for card close handling */}
          <div
            className="cart-dropdown"
            id="cartDropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-list" id="cartList">
              {productWidgetforPayment}
            </div>
            <div className="cart-summary">
              <small>{productData.length} Item(s) selected</small>
              <h5>SUBTOTAL: ${totalAmount}.00</h5>
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
    )
  );
}
