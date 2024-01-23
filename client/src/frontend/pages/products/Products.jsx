import React, { useEffect, useState } from "react";
import Aside from "./components/aside/Aside";
import Store from "./components/store/Store";
import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";
import { UseContext } from "../../use-context/UseContext";

import ProductsData from "../../../../../database/products.json";
import Category from "../../../../../database/category.json";
import Brands from "../../../../../database/brands.json";

import "../../../assets/css/style.css";
const loading = <h1 className="loading">Loading</h1>;

export default function Products() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [brands, setBrands] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setProducts(ProductsData);
    setCategory(Category);
    setBrands(Brands);
    setIsloading(false);
  }, []);

  return isLoading ? (
    loading
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
            <UseContext.Provider value={{ products, category }}>
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
