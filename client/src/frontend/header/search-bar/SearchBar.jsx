import React, { useContext } from "react";
import { UseContext } from "../../../helper/use-context/UseContext";

export default function SearchBar() {
  const { category } = useContext(UseContext);

  return (
    <>
      <div className="col-md-6">
        <div className="header-search">
          <form id="search-bar" method="GET">
            <select className="input-select" id="search-type">
              <option value="0">All Categories</option>
              {category &&
                category.map((item, i) => (
                  <option key={i} value={item._id.$oid}>
                    {item.name}
                  </option>
                ))}
            </select>
            <input className="input" id="search" placeholder="Search here" />
            <button className="search-btn" id="searchbtn">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
