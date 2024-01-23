import React, { Component } from "react";
import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import HotDeal from "../home/components/hot-deal/HotDeal";
import TopSelling from "../home/components/top-selling/TopSelling";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";

import Products from "../../../../../database/products.json";
import Category from "../../../../../database/category.json";

import "../../../assets/css/style.css";
const loading = <h1 className="loading">Loading</h1>;

export default class HotDeals extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      category: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({
      products: Products,
      category: Category,
      isLoading: false,
    });
  }
  render() {
    const { products, category } = this.state;
    return this.state.isLoading ? (
      loading
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
