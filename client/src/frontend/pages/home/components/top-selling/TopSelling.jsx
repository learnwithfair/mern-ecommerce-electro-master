import React from "react";
import TopSellingNavigation from "./components/TopSellingNavigation";
import Product from "../../../../components/products/Product";

export default function TopSelling(props) {
  const { products, category } = props.data;
  const topSellingProducts = products.map((product, index) => (
    <Product
      key={index}
      productId={product._id.$oid}
      productSlug={product.productSlug}
      productName={product.productName}
      productPrice={product.productPrice}
      productCategory={
        category.find((cat) => product.catId === cat._id.$oid).catName
      }
      productPublish={product.productPublish}
      productDiscount={product.productDiscount}
      productRating={product.productRating}
      productImage={product.productImage}
    />
  ));
  return (
    <>
      {/* <!-- Top Selling SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- section title --> */}
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Top selling</h3>
                <TopSellingNavigation />
              </div>
            </div>
            {/* <!-- /section title --> */}

            {/* <!-- Products tab & slick --> */}
            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  {/* <!-- tab --> */}
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
                      {/* <!-- product --> */}
                      {topSellingProducts}
                      {/* <!-- /product --> */}
                    </div>
                    <div id="slick-nav-2" className="products-slick-nav"></div>
                  </div>
                  {/* <!-- /tab --> */}
                </div>
              </div>
            </div>
            {/* <!-- /Products tab & slick --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- / Top Selling SECTION --> */}
    </>
  );
}
