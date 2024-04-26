import React, { useContext, useEffect, useState } from "react";

import StoreProductsView from "./components/store-products/StoreProductsView";
import StoreProductsListView from "./components/store-products/StoreProductsListView";

import Data from "./data/soteData.json";
import { UseContext } from "../../../../../helper/use-context/UseContext";
import useFetch from "../../../../../helper/use-fetch/useFetch";
import { NavLink } from "react-router-dom";

export default function Store() {
  const { products, category, paginations } = useContext(UseContext);
  const [isListView, setIsListView] = useState(false);
  const [show, setShow] = useState(products.length);
  const [sortBy, setSortBy] = useState(2);
  const [productData, setProductData] = useState(products);
  const [categoryData, setCategoryData] = useState(category);
  const [paginationData, setPaginationData] = useState(paginations);

  const sortData = Data[0],
    showData = Data[1];

  // Initially set list view in local storage as false
  if (!localStorage.getItem("listView")) {
    localStorage.setItem("listView", false);
  }
  // Initial State set
  useEffect(() => {
    localStorage.getItem("listView") == "true"
      ? setIsListView(true)
      : setIsListView(false);
  }, []);

  // Handle Grid View
  const hundleGridView = () => {
    setIsListView(false);
    localStorage.setItem("listView", false);
  };
  // Handle List View
  const hundleListView = () => {
    setIsListView(true);
    localStorage.setItem("listView", true);
  };
  // Handle for Show & sort Item
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.id === "sort-by") {
      setSortBy(value);
    } else if (e.target.id === "show") {
      setShow(value);
      setData(e);
      ///
    }
  };

  // Fetch and set State
  const setData = (e) => {
    setTimeout(async () => {
      const page = new URLSearchParams(window.location.search).get("page") || 1;
      const limit = e.target.value || show;
      const info = JSON.parse(
        await useFetch(
          "api/products/show-all?page=" + page + "&limit=" + limit,
          {},
          "get"
        )
      );

      // Set State value after click submit button
      if (info.data != null) {
        setProductData(info.data.payload.products);
        setCategoryData(info.data.payload.categories);
        setPaginationData(info.data.payload.paginations);
      } else {
        console.error(info.error);
        setProductData(null);
        setCategoryData(null);
        setPaginationData(null);
      }
    }, 1);
  };

  // Button Store Pagination initialization
  const storePagination = [];
  const currentPage =
    new URLSearchParams(window.location.search).get("page") || 1;
  const totalButtonShow = 2; // Total 2 button show
  let i =
    currentPage > totalButtonShow ? currentPage - (totalButtonShow - 1) : 1;

  const maxValue = i + totalButtonShow;
  for (i; i < maxValue; i++) {
    storePagination.push(
      <li className={i == currentPage ? "active" : ""}>
        <NavLink exact="true" to={"/products?page=" + i} onClick={setData}>
          {i}
        </NavLink>
      </li>
    );
  }

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
                    <option key={i} defaultValue={item.value}>
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
                    <option
                      key={i}
                      defaultValue={item}
                      selected={item == show && true}
                    >
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
        {(productData && categoryData) != null &&
          (isListView ? (
            <StoreProductsListView
              products={productData}
              category={categoryData}
            />
          ) : (
            <StoreProductsView products={productData} category={categoryData} />
          ))}

        {/* <!-- /store products --> */}

        {/* <!-- store bottom filter --> */}
        <div className="store-filter clearfix">
          <span className="store-qty">
            Showing {productData.length} -
            {paginationData != null ? paginationData.totalItem : 0} products
          </span>
          <ul className="store-pagination">
            {paginationData.previousPage != null ? (
              <li>
                <NavLink
                  exact="true"
                  to={"/products?page=" + paginationData.previousPage}
                  onClick={setData}
                >
                  <i className="fa fa-angle-left"></i>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink>
                  <i className="fa fa-angle-left"></i>
                </NavLink>
              </li>
            )}
            {storePagination}

            {paginationData.nextPage != null ? (
              <li>
                <NavLink
                  exact="true"
                  to={"/products?page=" + paginationData.nextPage}
                  onClick={setData}
                >
                  <i className="fa fa-angle-right"></i>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink>
                  <i className="fa fa-angle-right"></i>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* <!-- /store bottom filter --> */}
      </div>
      {/* <!-- /STORE --> */}
    </>
  );
}
