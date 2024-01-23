import React from "react";
import Header from "../header/Header";
import BreadCrumb from "../header/bread-crumb/BreadCrumb";
import NewsLetter from "../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../footer/Footer";

export default function Demo() {
  return (
    <>
      <DynamicTitle title="Hot-Deals" />
      {/* Header Section */}
      <Header />
      {/* <!-- BREADCRUMB --> */}
      <BreadCrumb
        data={[{ name: "Home", link: "/" }]}
        activeName={"Hot Deals"}
      />
      {/* MAIN CONTENTS  */}
      This is Main Contents Section
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
