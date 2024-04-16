import React from "react";
import Product from "../../../../components/products/Product";

export default function RelatedProduct(props) {
  const { products, categories } = props.data;

  const relatedProducts = products.map((product, index) => (
    <Product
      key={index}
      productId={product._id}
      productSlug={product.productSlug}
      productName={product.productName}
      productPrice={product.productPrice}
      productCategory={
        categories.find((cat) => product.catId === cat._id).name
      }
      productPublish={product.productPublish}
      productDiscount={product.productDiscount}
      productRating={product.productRating}
      productImage={"../" + product.productImage}
    />
  ));
  return (
    <>
      {/* <!-- Section --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="title">Related Products</h3>
              </div>
            </div>
            {/* <!-- Relative Products tab & slick --> */}
            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  {/* <!-- tab --> */}
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
                      {/* <!-- product --> */}
                      {relatedProducts}
                      {/* <!-- /product --> */}
                    </div>
                    <div id="slick-nav-2" className="products-slick-nav"></div>
                  </div>
                  {/* <!-- /tab --> */}
                </div>
              </div>
            </div>
            {/* <!-- /Relative Products tab & slick --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /Section -->    */}
    </>
  );
}
