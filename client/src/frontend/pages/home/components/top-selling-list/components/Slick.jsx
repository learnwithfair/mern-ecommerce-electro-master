import React, { useContext } from "react";
import ProductWidget from "../../../../../components/product-widget/ProductWidget";
import { UseContext } from "../../../../../../helper/use-context/UseContext";

export default function Slick(props) {
  const category = useContext(UseContext);
  const products = props.data;
  const productWidgets = products.map((product, index) => (
    <ProductWidget
      key={index}
      productId={product._id.$oid}
      productSlug={product.productSlug}
      productName={product.productName}
      productCategory={
        category.find((cat) => product.catId === cat._id.$oid).name
      }
      productPrice={product.productPrice}
      productDiscount={product.productDiscount}
      productPublish={product.productPublish}
      productImage={product.productImage}
    />
  ));
  return (
    <>
      <div>
        {/* <!-- product widget --> */}
        {productWidgets}
        {/* <!-- product widget --> */}
      </div>
    </>
  );
}
