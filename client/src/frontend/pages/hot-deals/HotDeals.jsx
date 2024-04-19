import React, { Component } from "react";
import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import HotDeal from "../home/components/hot-deal/HotDeal";
import TopSelling from "../home/components/top-selling/TopSelling";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";

import Preloader from "../../../preloader/Preloader";
import useFetch from "../../../helper/use-fetch/useFetch";

export default class HotDeals extends Component {
  // Hooks can't call inside class component
  constructor() {
    super();
    this.state = {
      products: null,
      category: null,
      isLoading: true,
      error: null,
    };
  }
  async componentDidMount() {
    // Get All Products, category and Brands
    const info = JSON.parse(await useFetch("api/products/show-all", {}, "get"));
    const productsData = info.data != null ? info.data.payload.products : null;
    const categoryData =
      info.data != null ? info.data.payload.categories : null;

    // Set State
    this.setState({
      products: productsData,
      category: categoryData,
      error: info.error,
      isLoading: false,
    });
  }
  render() {
    // Destructuring state data
    const { products, category } = this.state;

    return (products || category) === null ? (
      this.state.error
    ) : this.state.isLoading ? (
      <Preloader />
    ) : (
      <>
        <DynamicTitle title="Hot-Deals" />

        {/* Header Section */}
        <Header />

        {/* <!-- BREADCRUMB --> */}
        <BreadCrumb
          data={[{ name: "Home", link: "/" }]}
          activeName={"Hot Deals"}
        />

        {/* <!-- HOT DEAL SECTION --> */}
        <div style={{ marginTop: "-30px" }}></div>
        <HotDeal style={{ marginTop: "0px", background: "red" }} />

        {/* <!-- TOP SELLING SECTION --> */}
        {<TopSelling data={{ products, category }} />}

        {/* <!-- FOOTER --> */}

        {/* <!-- NEWSLETTER --> */}
        <NewsLetter />

        {/* <!-- MAIN FOOTER --> */}
        <Footer />

        {/* <!-- /FOOTER --> */}
      </>
    );
  }
}
