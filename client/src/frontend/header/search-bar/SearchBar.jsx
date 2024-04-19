import React, { useContext } from "react";
import useFetchState from "../../../helper/use-fetch/useFetchState";
import Preloader from "../../../preloader/Preloader";
import { UseContext } from "../../../helper/use-context/UseContext";

export default function SearchBar() {
  const { category } = useContext(UseContext);
  // const { data, isLoading, error } = useFetchState("api/category/show-all");
  // const category = data != null ? data.payload.categories : null;

  return (
    <>
      <div className="col-md-6">
        <div className="header-search">
          <form id="search-bar" method="GET">
            <select className="input-select" id="search-type">
              <option value="0">All Categories</option>
              {category &&
                category.map((item, i) => (
                  <option key={i} value={item._id}>
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
