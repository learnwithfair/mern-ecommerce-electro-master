import React from "react";

import ShopData from "./data/ShopData.json";
import Shop from "./components/Shop";

export default function HeroArea() {
  const shopData = ShopData.map((item, index) => (
    <Shop key={index} name={item.name} link={item.link} image={item.image} />
  ));
  return (
    <>
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- shop --> */}
            {shopData}
            {/* <!-- /shop --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
    </>
  );
}
