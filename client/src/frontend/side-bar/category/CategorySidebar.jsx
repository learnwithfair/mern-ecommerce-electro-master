import React, { useContext } from "react";
import { UseContext } from "../../../helper/use-context/UseContext";

export default function CategorySidebar() {
  const { products, category } = useContext(UseContext);

  const categoryFilter = category.map((item, i) => (
    <div className="input-checkbox" key={i}>
      <input type="checkbox" id={item.slug} defaultChecked />
      <label htmlFor={item.slug}>
        <span></span>
        {item.name}
        <small>
          {"  (" +
            products.filter((prdts) => item._id === prdts.catId).length +
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
