import React from "react";

export default function PriceSidebar() {
  return (
    <>
      {/* <!-- aside Widget --> */}
      <div className="aside">
        <h3 className="aside-title">Price</h3>
        <div className="price-filter">
          <div id="price-slider"></div>
          <div className="input-number price-min">
            <input id="price-min" type="number" defaultValue={0} />
            <span className="qty-up">+</span>
            <span className="qty-down">-</span>
          </div>
          <span>-</span>
          <div className="input-number price-max">
            <input id="price-max" type="number" defaultValue={999.0} />
            <span className="qty-up">+</span>
            <span className="qty-down">-</span>
          </div>
        </div>
      </div>
      {/* <!-- /aside Widget --> */}
    </>
  );
}
