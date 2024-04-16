import React, { useEffect, useState } from "react";

import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import HeroArea from "./components/hero-area/HeroArea";
import NewProducts from "./components/new-products/NewProducts";
import HotDeal from "./components/hot-deal/HotDeal";
import TopSelling from "./components/top-selling/TopSelling";
import TopSellingList from "./components/top-selling-list/TopSellingList";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import { UseContext } from "../../../helper/use-context/UseContext";

import Products from "../../../../../database/products.json";
import Category from "../../../../../database/category.json";

// import "../../../assets/css/style.css";
import Preloader from "../../../preloader/Preloader";


export default function Home() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts(Products);
  }, []);
  useEffect(() => {
    setCategory(Category);
    setIsLoading(false);
  }, []);



  return isLoading ? (
    <Preloader/>
  ) : (
    <>
      <DynamicTitle title="Home" />

      {/* Header Section */}
      <Header />

      {/* <!-- Hero Area Section --> */}
      <HeroArea />

      {/* <!-- New Products Section --> */}
      <NewProducts data={{ products, category }} />

      {/* <!-- HOT DEAL SECTION --> */}
      <HotDeal />

      {/* <!-- TOP SELLING SECTION --> */}
      <TopSelling data={{ products, category }} />

      {/* <!-- TOP SELLING LIST SECTION --> */}
      <UseContext.Provider value={category}>
        <TopSellingList data={products} />
      </UseContext.Provider>

      {/* <!-- FOOTER --> */}

      {/* <!-- NEWSLETTER --> */}
      <NewsLetter />

      {/* <!-- MAIN FOOTER --> */}
      <Footer />

      {/* <!-- /FOOTER --> */}
    </>
  );
}
