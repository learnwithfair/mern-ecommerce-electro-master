import React, { useContext, useEffect, useState } from "react";
import { UseContext } from "../../../helper/use-context/UseContext";
import ProductWidget from "../../components/product-widget/ProductWidget";

export default function TopSellingSidebar() {
  const { products, category } = useContext(UseContext);
  const [marqueeTag, setMarqueeTag] = useState(null);
  const productWidgets = products.map((product, index) => (
    <ProductWidget
      key={index}
      productId={product._id}
      productSlug={product.productSlug}
      productName={product.productName}
      productCategory={
        category.find((cat) => product.catId === cat._id).name
      }
      productPrice={product.productPrice}
      productDiscount={product.productDiscount}
      productPublish={product.productPublish}
      productImage={product.productImage}
    />
  ));
  useEffect(() => {
    setMarqueeTag(
      productWidgets.length > 6 ? (
        <marquee
          onMouseOver={(e) => {
            e.target.stop();
          }}
          onMouseOut={(e) => {
            e.target.start();
          }}
          direction="up"
          height="650px"
        >
          {productWidgets}
        </marquee>
      ) : (
        productWidgets
      )
    );
  }, []);

  return (
    <>
      {/* <!-- aside Widget --> */}
      <div className="aside">
        <h3 className="aside-title">Top selling</h3>
        {marqueeTag && marqueeTag}

        {/*  */}
      </div>
      {/* <!-- /aside Widget --> */}
    </>
  );
}
