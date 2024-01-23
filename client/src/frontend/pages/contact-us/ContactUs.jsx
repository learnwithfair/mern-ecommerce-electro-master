import React from "react";
import DynamicTitle from "../../components/DynamicTitle";
import Header from "../../header/Header";
import BreadCrumb from "../../header/bread-crumb/BreadCrumb";
import NewsLetter from "../../footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../footer/Footer";

export default function ContactUs() {
  return (
    <>
      <DynamicTitle title="Contact-Us" />
      {/* Header Section */}
      <Header />
      {/* <!-- BREADCRUMB --> */}
      <BreadCrumb
        data={[{ name: "Home", link: "/" }]}
        activeName={"Contact Us"}
      />
      {/* MAIN CONTENTS  */}
      Contact Us
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
