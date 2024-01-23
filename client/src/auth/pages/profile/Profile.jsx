import React from "react";
import DynamicTitle from "../../../frontend/components/DynamicTitle";
import Header from "../../../frontend/header/Header";
import BreadCrumb from "../../../frontend/header/bread-crumb/BreadCrumb";
import NewsLetter from "../../../frontend/footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../../frontend/footer/Footer";

export default function Profile() {
  return (
    <>
      <DynamicTitle title="Profile" />
      {/* Header Section */}
      <Header />
      {/* <!-- BREADCRUMB --> */}
      <BreadCrumb data={[{ name: "Home", link: "/" }]} activeName={"Profile"} />
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
