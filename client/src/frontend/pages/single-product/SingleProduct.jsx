import React, { useEffect, useState } from "react";

import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";
import { UseContext } from "../../use-context/UseContext";

import ProductsData from "../../../../../database/products.json";
import Category from "../../../../../database/category.json";
import Brands from "../../../../../database/brands.json";
import Reviews from "../../../../../database/reviews.json";
import ProductImages from "../../../../../database/products_images.json";

import "../../../assets/css/style.css";
import ProductDisplay from "./components/product-display/ProductDisplay";
import RelatedProduct from "./components/related-product/RelatedProduct";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const loading = <h1 className="loading">Loading</h1>;

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [productImages, setProductImages] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [review, setReview] = useState(null);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const params = useParams();
  //  console.log();
  useEffect(() => {
    // let params = () => useParams();
    // console.log(params.productSlug);
    // const urlParams = new URLSearchParams(window.location.search).get('id');
    // console.log(urlParams);
    // console.log(window.location.pathname);
    // const prdct = ProductsData[0];

    const prdct = ProductsData.filter(
      (item, i) => item.productSlug === params.productSlug
    )[0];
    setProduct(prdct);
    setProductImages(
      ProductImages.filter((item) => prdct._id.$oid === item.productId)
    );
    setCategory(Category.find((cat) => prdct.catId === cat._id.$oid));
    setBrand(Brands.find((brnd) => prdct.brandId === brnd._id.$oid));
    setReview(Reviews.filter((item) => prdct._id.$oid === item.productId));
    setProducts(ProductsData);
    setCategories(Category);
    setIsloading(false);
  }, []);

 

  return isLoading ? (
    loading
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
            name: category.catName,
            link: "/all-category?category=" + category.catSlug,
          },
        ]}
        activeName={product.productName}
      />
      {/* MAIN CONTENTS  */}

      {/* PRODUCT DISPLAY  */}

      <UseContext.Provider
        value={{ product, category, brand, review, productImages }}
      >
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
