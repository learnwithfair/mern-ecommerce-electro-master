import React, { useEffect, useState } from "react";

import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";
import { UseContext } from "../../../helper/use-context/UseContext";

// import "../../../assets/css/style.css";
import ProductDisplay from "./components/product-display/ProductDisplay";
import RelatedProduct from "./components/related-product/RelatedProduct";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Preloader from "../../../preloader/Preloader";
import useFetchState from "../../../helper/use-fetch/useFetchState";

export default function SingleProduct() {
  const params = useParams();
  var product = null,
    brand = null,
    category = null;

  // Display All Product, Categories and Brands
  const { data, isLoading, error } = useFetchState("api/products/show-all");

  const products = data != null ? data.payload.products : null;
  const categories = data != null ? data.payload.categories : null;
  const brands = data != null ? data.payload.brands : null;

  if ((products && categories && brands) != null) {
    product = products.filter(
      (prodct, i) => prodct.productSlug === params.productSlug
    )[0];

    brand = brands.find((brnd) => product.brandId === brnd._id);
    category = categories.find((cat) => product.catId === cat._id);
  }

  return (products || categories || brands) == null ? (
    error
  ) : isLoading ? (
    <Preloader />
  ) : (
    <>
      <DynamicTitle title={product.productName} />
      <Helmet>
        <link
          type="text/css"
          rel="stylesheet"
          href="../src/frontend/assets/css/bootstrap.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../src/frontend/assets/css/style.css"
        />
        <script src="../src/frontend/assets/js/main.js"></script>
      </Helmet>
      {/* Header Section */}
      <Header />
      {/* <!-- BREADCRUMB --> */}
      <BreadCrumb
        data={[
          { name: "Home", link: "/" },
          { name: "All Category", link: "/products" },
          { name: "Products", link: "/products" },
          {
            name: category.name,
            link: "/all-category?category=" + category.slug,
          },
        ]}
        activeName={product.productName}
      />
      {/* MAIN CONTENTS  */}

      {/* PRODUCT DISPLAY  */}

      <UseContext.Provider value={{ product, category, brand }}>
        <ProductDisplay />
      </UseContext.Provider>

      {/* RELATED PRODUCT   */}
      <RelatedProduct data={{ products, categories }} />

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
