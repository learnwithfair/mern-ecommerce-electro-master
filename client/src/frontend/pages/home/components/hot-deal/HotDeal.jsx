import React from "react";

import countDownData from "./data/countDwonData.json";
import { NavLink } from "react-router-dom";

export default function HotDeal() {
  const countDown = [];

  for (let index = 0; index < countDownData.length; index++) {
    countDown[index] = (
      <li key={index}>
        <div>
          <h3>{countDownData[index].digit}</h3>
          <span>{countDownData[index].extension}</span>
        </div>
      </li>
    );
  }
  return (
    <>
      {/* <!-- HOT DEAL SECTION --> */}
      <div id="hot-deal" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">{countDown}</ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collection Up to 50% OFF</p>
                <NavLink
                  className="primary-btn cta-btn"
                  exact="true"
                  to="/products"
                >
                  Shop now
                </NavLink>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /HOT DEAL SECTION --> */}
    </>
  );
}
