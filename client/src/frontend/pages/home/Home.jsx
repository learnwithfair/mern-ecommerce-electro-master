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

import Preloader from "../../../preloader/Preloader";
import useFetchState from "../../../helper/use-fetch/useFetchState";

export default function Home() {
  // Display All Product, Categories and Brands
  const { data, isLoading, error } = useFetchState("api/products/show-all");

  const products = data != null ? data.payload.products : null;
  const category = data != null ? data.payload.categories : null;

  // const [products, setProducts] = useState(null);
  // const [category, setCategory] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  return (products || category) == null ? (
    error
  ) : isLoading ? (
    <Preloader />
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
