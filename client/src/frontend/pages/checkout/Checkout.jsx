import React from "react";
import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";

import CLIENT_URL from "../../../config/Config";
import useFetchState from "../../../helper/use-fetch/useFetchState";
import Preloader from "../../../preloader/Preloader";

export default function Checkout() {
  // Display All Product, Categories and Brands
  const { data, isLoading, error } = useFetchState("api/products/show-all");

  const productDatas = data != null ? data.payload.products : null;
  // const category = data != null ? data.payload.categories : null;
  // Filtering Item which are included into cartlist
  const cartList = JSON.parse(localStorage.getItem("cartList"));
  const productData =
    productDatas != null
      ? productDatas.filter((product, i) => {
          for (let i = 0; i < cartList.length; i++) {
            if (product._id == cartList[i].productId) {
              product["productQuantity"] = parseInt(
                cartList[i].productQuantity
              );
              return true;
            }
          }
        })
      : null;

  // Calculatting Total Amount for CartList Item
  let totalAmount = 0;
  productData != null
    ? productData.map((product, i) => {
        totalAmount +=
          product.productQuantity *
          (product.productDiscount > 0
            ? product.productPrice -
              product.productPrice * (product.productDiscount / 100)
            : product.productPrice);
      })
    : null;

  return productData == null ? (
    error
  ) : isLoading ? (
    <Preloader />
  ) : (
    <>
      <DynamicTitle title="Hot-Deals" />
      {/* Header Section */}
      <Header />
      {/* <!-- BREADCRUMB --> */}
      <BreadCrumb
        data={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
        ]}
        activeName={"Checkout"}
      />
      {/* MAIN CONTENTS  */}

      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <form action={CLIENT_URL + "payment/ssl-request"} method="post">
              <div className="col-md-7">
                {/* <!-- Billing Details --> */}
                <div className="billing-details">
                  <div className="section-title">
                    <h3 className="title">Billing address</h3>
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="zip-code"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="tel"
                      name="tel"
                      placeholder="Telephone"
                    />
                  </div>
                  <div className="form-group">
                    <div className="input-checkbox">
                      <input type="checkbox" id="create-account" />
                      <label htmlFor="create-account">
                        <span></span>
                        Create Account?
                      </label>
                      <div className="caption">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                        <input
                          className="input"
                          type="password"
                          name="password"
                          placeholder="Enter Your Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Billing Details --> */}

                {/* <!-- Shiping Details --> */}
                <div className="shiping-details">
                  <div className="section-title">
                    <h3 className="title">Shiping address</h3>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="shiping-address" />
                    <label htmlFor="shiping-address">
                      <span></span>
                      Ship to a diffrent address?
                    </label>
                    <div className="caption">
                      <div className="form-group">
                        <input
                          className="input"
                          type="text"
                          name="first-name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="text"
                          name="last-name"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="text"
                          name="address"
                          placeholder="Address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="text"
                          name="city"
                          placeholder="City"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="text"
                          name="country"
                          placeholder="Country"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="text"
                          name="zip-code"
                          placeholder="ZIP Code"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="input"
                          type="tel"
                          name="tel"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Shiping Details --> */}

                {/* <!-- Order notes --> */}
                <div className="order-notes">
                  <textarea
                    className="input"
                    placeholder="Order Notes"
                  ></textarea>
                </div>
                {/* <!-- /Order notes --> */}
              </div>

              {/* <!-- Order Details --> */}
              <div className="col-md-5 order-details">
                <div className="section-title text-center">
                  <h3 className="title">Your Order</h3>
                </div>
                <div className="order-summary">
                  <div className="order-col">
                    <div>
                      <strong>PRODUCT</strong>
                    </div>
                    <div>
                      <strong>TOTAL</strong>
                    </div>
                  </div>
                  <div className="order-products">
                    {productData.map((product, i) => (
                      <div key={i} className="order-col">
                        <div>
                          {product.productQuantity}x {product.productName}
                        </div>
                        <div>
                          $
                          {product.productQuantity *
                            (product.productDiscount > 0
                              ? product.productPrice -
                                product.productPrice *
                                  (product.productDiscount / 100)
                              : product.productPrice)}
                          .00
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="order-col">
                    <div>Shiping</div>
                    <div>
                      <strong>FREE</strong>
                    </div>
                  </div>
                  <div className="order-col">
                    <div>
                      <strong>TOTAL</strong>
                    </div>
                    <div>
                      <strong className="order-total">${totalAmount}.00</strong>
                      <input
                        type="hidden"
                        value={totalAmount}
                        name="total_amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-1" />
                    <label htmlFor="payment-1">
                      <span></span>
                      Direct Bank Transfer
                    </label>
                    <div className="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-2" />
                    <label htmlFor="payment-2">
                      <span></span>
                      Cheque Payment
                    </label>
                    <div className="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-3" />
                    <label htmlFor="payment-3">
                      <span></span>
                      Paypal System
                    </label>
                    <div className="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="input-checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    <span></span>
                    I've read and accept the <a href="#">terms & conditions</a>
                  </label>
                </div>
                {/* <a className="primary-btn order-submit">Place order</a> */}
                {totalAmount > 0 ? (
                  <button type="submit" className="primary-btn order-submit">
                    Place order
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="primary-btn order-submit"
                  >
                    Place order
                  </button>
                )}
              </div>
              {/* <!-- /Order Details --> */}
            </form>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>

      {/* /MAIN CONTENTS  */}

      {/* <!-- FOOTER --> */}
      {/* <!-- NEWSLETTER --> */}
      <NewsLetter />
      {/* <!-- MAIN FOOTER --> */}
      <Footer />
      {/* <!-- /FOOTER --> */}
    </>
  );
}
