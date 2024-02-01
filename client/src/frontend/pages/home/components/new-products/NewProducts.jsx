import React from "react";
import NewProductNavigation from "./components/NewProductNavigation";
import Product from "../../../../components/products/Product";

export default function NewProducts(props) {
  const { products, category } = props.data;
  const newProducts = products.map((product, index) => (
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
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- section title --> */}
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">New Products</h3>
                {/* <!-- New Product Navigation --> */}
                <NewProductNavigation />
                {/* <!-- /New Product Navigation --> */}
              </div>
            </div>
            {/* <!-- /section title --> */}

            {/* <!-- Products tab & slick --> */}
            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  {/* <!-- tab --> */}
                  <div id="tab1" className="tab-pane active">
                    <div className="products-slick" data-nav="#slick-nav-1">
                      {/* <!-- product --> */}
                      {newProducts}
                    </div>
                    <div id="slick-nav-1" className="products-slick-nav"></div>
                  </div>
                  {/* <!-- /tab --> */}
                </div>
              </div>
            </div>
            {/* <!-- Products tab & slick --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
    </>
  );
}
