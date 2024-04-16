import React, { Fragment, useContext } from "react";
import Product from "../../../../../../components/products/Product";

export default function (props) {
  const { products, category } = props;

  /*                                                              *\
   If any problem for alignment of items then comment out below code
  \*                                                              */
  //   const sm = [];
  //   const md = [];
  //   const lg = [];
  //   let count1 = 0,
  //     count2 = 2;
  //   for (let i = 1; i <= products.length; i++) {
  //     if (i % 2 != 0) {
  //       if (count1 === 2) {
  //         lg.push(i);
  //         count1 = 0;
  //       } else {
  //         sm.push(i);
  //         count1++;
  //       }
  //     } else {
  //       if (count2 === 2) {
  //         md.push(i);
  //         count2 = 0;
  //       } else {
  //         count2++;
  //       }
  //     }
  //   }

  const storeProducts = products.map((product, index) => (
    <Fragment key={index}>
      <div className="col-md-4 col-xs-6">
        <Product
          key={index}
          productId={product._id}
          productSlug={product.productSlug}
          productName={product.productName}
          productPrice={product.productPrice}
          productCategory={
            category.find((cat) => product.catId === cat._id).name
          }
          productPublish={product.productPublish}
          productDiscount={product.productDiscount}
          productRating={product.productRating}
          productImage={product.productImage}
        />
      </div>
      {/* {sm.includes(index) && (
        <div className="clearfix visible-sm visible-xs"></div>
      )}
      {md.includes(index) && (
        <div className="clearfix visible-lg visible-md"></div>
      )}{" "}
      {lg.includes(index) && (
        <div className="clearfix visible-lg visible-md visible-sm visible-xs"></div>
      )} */}
    </Fragment>
  ));
  return (
    <>
      {/* <!-- store products --> */}
      <div className="row">
        {/* <!-- product --> */}
        {storeProducts}
        {/* <!-- /product --> */}
      </div>
      {/* <!-- /store products --> */}
    </>
  );
}
