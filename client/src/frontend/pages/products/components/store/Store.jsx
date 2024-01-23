import React, { useEffect, useState } from "react";

import StoreProductsView from "./components/store-products/StoreProductsView";
import StoreProductsListView from "./components/store-products/StoreProductsListView";

import Data from "./data/soteData.json";

export default function Store() {
  const [isListView, setIsListView] = useState(false);
  const [show, setShow] = useState(10);
  const [sortBy, setSortBy] = useState(2);
  const sortData = Data[0],
    showData = Data[1];

  const hundleGridView = () => {
    setIsListView(false);
  };
  const hundleListView = () => {
    setIsListView(true);
  };
  const handleChange = (e) => {
    if (e.target.id === "sort-by") setSortBy(e.target.value);
    else if (e.target.id === "show") setShow(e.target.value);
  };
  return (
    <>
      {/* <!-- STORE --> */}
      <div id="store" className="col-md-9">
        {/* <!-- store top filter --> */}
        <div className="store-filter clearfix">
          <form id="store-filter" action="" method="get">
            <div className="store-sort">
              <label>
                Sort By:
                <select
                  onChange={handleChange}
                  id="sort-by"
                  className="input-select"
                >
                  {sortData.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Show:
                <select
                  id="show"
                  className="input-select"
                  onChange={handleChange}
                >
                  {showData.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <ul className="store-grid">
              <li
                className={isListView ? "" : "active"}
                onClick={hundleGridView}
              >
                <i className="fa fa-th"></i>
              </li>
              <li
                className={isListView ? "active" : ""}
                onClick={hundleListView}
              >
                <i className="fa fa-th-list"></i>
              </li>
            </ul>
          </form>
        </div>
        {/* <!-- /store top filter --> */}

        {/* <!-- store products --> */}
        {isListView ? <StoreProductsListView /> : <StoreProductsView />}

        {/* <!-- /store products --> */}

        {/* <!-- store bottom filter --> */}
        <div className="store-filter clearfix">
          <span className="store-qty">Showing {show} -100 products</span>
          <ul className="store-pagination">
            <li className="active">1</li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- /store bottom filter --> */}
      </div>
      {/* <!-- /STORE --> */}
    </>
  );
}
