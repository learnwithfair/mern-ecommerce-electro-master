import React, { useContext } from "react";
import { UseContext } from "../../../../../../use-context/UseContext";
import ProductWidget from "../../../../../../components/product-widget/ProductWidget";

export default function StoreProductsListView() {
  const { products, category } = useContext(UseContext);

  const storeProductsListView = products.map((product, index) => (
    <div key={index} className="col-md-4 col-xs-6">
      <ProductWidget
        key={index}
        productId={product._id.$oid}
        productSlug={product.productSlug}
        productName={product.productName}
        productCategory={
          category.find((cat) => product.catId === cat._id.$oid).catName
        }
        productPrice={product.productPrice}
        productDiscount={product.productDiscount}
        productPublish={product.productPublish}
        productImage={product.productImage}
      />
    </div>
  ));
  return (
    <>
      {/* <!-- store products --> */}
      <div className="row" style={{ marginTop: "25px" }}>
        {/* <!-- product --> */}
        {storeProductsListView}
        {/* <!-- /product --> */}
      </div>
      {/* <!-- /store products --> */}
    </>
  );
}
