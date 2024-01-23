import React from "react";
import Banner from "../../banner/Banner";
import DynamicTitle from "../../components/DynamicTitle";
import SideBar from "../../side-bar/SideBar";
import Header from "../../header/Header";
import Content from "./components/content";
import Footer from "../../footer/Footer";

export default function Dashboard() {
  return (
    <>
      <DynamicTitle title={"Dashboard"} />
      <div className="container-scroller">
        {/* <Banner /> */}
        <SideBar />
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper">
          <Header />
          {/* |||||||||| */}
          {/* <!-- partial --> */}
          <div className="main-panel">
            <Content />
            {/* <!-- content-wrapper ends --> */}
            {/* <!-- partial:partials/_footer.html --> */}
            <Footer />
            {/* <!-- partial --> */}
          </div>
          {/* |||||||||| */}
        </div>
      </div>
    </>
  );
}
