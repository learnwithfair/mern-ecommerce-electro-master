import React from "react";
import ProductNav from "./components/product-nav/ProductNav";
import ProductContent from "./components/product-content/ProductContent";

export default function ProductTab() {
  return (
    <>
      {/* <!-- Product tab --> */}
      <div className="col-md-12">
        <div id="product-tab">
          {/* <!-- product tab nav --> */}
          <ProductNav />

          {/* <!-- product tab content --> */}
          <ProductContent />
        </div>
      </div>
      {/* <!-- /product tab --> */}
    </>
  );
}
