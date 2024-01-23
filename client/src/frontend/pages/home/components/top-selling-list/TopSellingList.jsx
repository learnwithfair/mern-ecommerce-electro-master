import React from "react";

import SetTitle from "./components/SetTitle";
import Slick from "./components/Slick";

export default function TopSellingList(props) {
  const products = props.data;
  const slick1 = [];
  for (let index = 0; index < Math.ceil(products.length / 3); index++) {
    const SlickData = products.slice(index * 3, index * 3 + 3); // Slice by Minimum 3 items

    slick1[index] = <Slick key={index} data={SlickData} />;
  }
  return (
    <>
      {/* <!-- TOP SELLING LIST SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <SetTitle title={"Top Selling-1"} id="slick-nav-3" />

              <div className="products-widget-slick" data-nav="#slick-nav-3">
                {slick1}
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <SetTitle title={"Top Selling-2"} id="slick-nav-4" />

              <div className="products-widget-slick" data-nav="#slick-nav-4">
                {slick1}
              </div>
            </div>

            <div className="clearfix visible-sm visible-xs"></div>

            <div className="col-md-4 col-xs-6">
              <SetTitle title={"Top Selling-3"} id="slick-nav-5" />

              <div className="products-widget-slick" data-nav="#slick-nav-5">
                {slick1}
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /TOP SELLING LIST SECTION --> */}
    </>
  );
}
