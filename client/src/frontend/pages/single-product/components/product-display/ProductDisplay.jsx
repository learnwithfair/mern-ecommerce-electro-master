import React from "react";
import ProductPreview from "./components/product-preview/ProductPreview";
import ProductDetails from "./components/product-details/ProductDetails";
import ProductTab from "./components/product-tab/ProductTab";

export default function ProductDisplay() {
  return (
    <>
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- PRODUCT PREVIEW --> */}
            <ProductPreview />

            {/* <!-- Product details --> */}
            <ProductDetails />

            {/* <!-- Product tab --> */}
            <ProductTab />
          </div>

          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>

      {/* <!-- /SECTION --> */}
    </>
  );
}
