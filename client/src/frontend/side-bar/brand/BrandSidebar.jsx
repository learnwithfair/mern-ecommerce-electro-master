import React, { useContext } from "react";
import { UseContext } from "../../use-context/UseContext";

export default function BrandSidebar() {
  const { products, brands } = useContext(UseContext);

  const brandFilter = brands.map((item, i) => (
    <div className="input-checkbox" key={i}>
      <input type="checkbox" id={item.brandSlug} defaultChecked />
      <label htmlFor={item.brandSlug}>
        <span></span>
        {item.brandName}
        <small>
          {"  (" +
            products.filter((prdts) => item._id.$oid === prdts.brandId).length +
            ")"}
        </small>
      </label>
    </div>
  ));
  return (
    <>
      {/* <!-- aside Widget --> */}
      <div className="aside">
        <h3 className="aside-title">Brand</h3>
        <div className="checkbox-filter">{brandFilter}</div>
      </div>
      {/* <!-- /aside Widget --> */}
    </>
  );
}
