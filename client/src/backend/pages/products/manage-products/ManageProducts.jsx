import React from "react";
import DynamicTitle from "../../../components/DynamicTitle";
import SideBar from "../../../side-bar/SideBar";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

export default function ManageProducts() {
  return (
    <>
      <DynamicTitle title={"Manage-Products"} />
      <div className="container-scroller">
        <SideBar />
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper">
          <Header />
          {/* |||||||||| */}
          {/* <!-- partial --> */}
          <div className="main-panel">
            Hello Manage Product
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
