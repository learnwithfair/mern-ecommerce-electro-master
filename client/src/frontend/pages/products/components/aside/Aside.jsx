import React from "react";
import CategorySidebar from "../../../../side-bar/category/CategorySidebar";
import PriceSidebar from "../../../../side-bar/price/PriceSidebar";
import BrandSidebar from "../../../../side-bar/brand/BrandSidebar";
import TopSellingSidebar from "../../../../side-bar/top-selling/TopSellingSidebar";

export default function Aside() {
  return (
    <>
      {/* <!-- ASIDE --> */}
      <div id="aside" className="col-md-3">
        {/* <!-- CATEGORY SIDEBAR --> */}
        <CategorySidebar />

        {/* <!-- PRICE SIDEBAR --> */}
        <PriceSidebar />

        {/* BRAND SIDEBAR  */}
        <BrandSidebar />

        {/* <!-- TOP SELLING SIDEBAR --> */}
        <TopSellingSidebar />
      </div>
      {/* <!-- /ASIDE --> */}
    </>
  );
}
