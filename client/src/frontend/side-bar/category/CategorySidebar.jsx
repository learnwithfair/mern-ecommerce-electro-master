import React, { useContext } from "react";
import { UseContext } from "../../use-context/UseContext";

export default function CategorySidebar() {
  const { products, category } = useContext(UseContext);

  const categoryFilter = category.map((item, i) => (
    <div className="input-checkbox" key={i}>
      <input type="checkbox" id={item.catSlug} defaultChecked />
      <label htmlFor={item.catSlug}>
        <span></span>
        {item.catName}
        <small>
          {"  (" +
            products.filter((prdts) => item._id.$oid === prdts.catId).length +
            ")"}
        </small>
      </label>
    </div>
  ));
  return (
    <>
      {/* <!-- aside Widget --> */}
      <div className="aside">
        <h3 className="aside-title">Categories</h3>
        <div className="checkbox-filter">{categoryFilter}</div>
      </div>
      {/* <!-- /aside Widget --> */}
    </>
  );
}
