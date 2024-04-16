import React, { useContext } from "react";
import { UseContext } from "../../../../../../../helper/use-context/UseContext";
import useFetchState from "../../../../../../../helper/use-fetch/useFetchState";

export default function ProductPreview() {
  const { product } = useContext(UseContext);
  const { data, isLoading, error } = useFetchState(
    "api/single-product-images/" + product._id
  );

  const productPreview =
    data != null &&
    data.payload.productImages.map((item, i) => (
      <div key={i} className="product-preview">
        <img src={"../" + item.productImage} alt=""></img>
      </div>
    ));

  return (
    productPreview && (
      <>
        {/* <!-- Product main img --> */}
        <div className="col-md-5 col-md-push-2">
          <div id="product-main-img">{productPreview}</div>
        </div>
        {/* <!-- /Product main img --> */}

        {/* <!-- Product thumb imgs --> */}
        <div className="col-md-2  col-md-pull-5">
          <div id="product-imgs">{productPreview}</div>
        </div>
        {/* <!-- /Product thumb imgs --> */}
      </>
    )
  );
}
