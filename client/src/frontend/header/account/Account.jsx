import React from "react";
import Wishlist from "./components/wish-list/Wishlist";
import Cart from "./components/cart/Cart";

export default function Account() {
  return (
    <>
      <div className="col-md-3 clearfix">
        <div className="header-ctn">
          {/* <!-- Wishlist --> */}
          <Wishlist />
          {/* <!-- /Wishlist --> */}

          {/* <!-- Cart --> */}
          <Cart />
          {/* <!-- /Cart --> */}

          {/* <!-- Menu Toogle --> */}
          <div className="menu-toggle">
            <a href="#">
              <i className="fa fa-bars"></i>
              <span>Menu</span>
            </a>
          </div>
          {/* <!-- /Menu Toogle --> */}
        </div>
      </div>
    </>
  );
}
