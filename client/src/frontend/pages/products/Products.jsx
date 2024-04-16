import React, { useEffect, useState } from "react";
import Aside from "./components/aside/Aside";
import Store from "./components/store/Store";
import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";
import { UseContext } from "../../../helper/use-context/UseContext";

import Preloader from "../../../preloader/Preloader";
import useFetchState from "../../../helper/use-fetch/useFetchState";

export default function Products() {
  // Display All Product, Categories and Brands
  const { data, isLoading, error } = useFetchState("api/products/show-all");

  const products = data != null ? data.payload.products : null;
  const category = data != null ? data.payload.categories : null;
  const brands = data != null ? data.payload.brands : null;
  const paginations = data != null ? data.payload.paginations : null;

  return (products || category || brands) == null ? (
    error
  ) : isLoading ? (
    <Preloader />
  ) : (
    <>
      <DynamicTitle title="Products" />

      {/* Header Section */}
      <Header />

      {/* <!-- BREADCRUMB --> */}
      <BreadCrumb
        data={[
          { name: "Home", link: "/" },
          { name: "ALL CATEGORIES", link: "/products" },
        ]}
        activeName={"Products"}
      />

      {/* MAIN CONTENTS  */}
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- ASIDE --> */}
            <UseContext.Provider value={{ products, category, brands }}>
              <Aside />
            </UseContext.Provider>
            {/* <!-- /ASIDE --> */}
            {/* <!-- STORE --> */}
            <UseContext.Provider value={{ products, category, paginations }}>
              <Store />
            </UseContext.Provider>

            {/* <!-- /STORE --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
      {/* /MAIN CONTENTS  */}

      {/* <!-- FOOTER --> */}

      {/* <!-- NEWSLETTER --> */}
      <NewsLetter />

      {/* <!-- MAIN FOOTER --> */}
      <Footer />

      {/* <!-- /FOOTER --> */}
    </>
  );
}
