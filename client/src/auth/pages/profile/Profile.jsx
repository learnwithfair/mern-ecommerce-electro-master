import React, { useState } from "react";
import DynamicTitle from "../../../frontend/components/DynamicTitle";
import Header from "../../../frontend/header/Header";
import BreadCrumb from "../../../frontend/header/bread-crumb/BreadCrumb";
// import NewsLetter from "../../../frontend/footer/sub-footer/news-letter/NewsLetter";
import Footer from "../../../frontend/footer/Footer";
import PresentAddress from "./present-address/PresentAddress";
import PersonalInfo from "./personal-info/PersonalInfo";
import ProfileImage from "./profile-image/ProfileImage";
import AccountControl from "./account-control/AccountControl";
import useFetchState from "../../../helper/use-fetch/useFetchState";
import ChangePassword from "./change-password/ChangePassword";

export default function Profile() {
  // const [profileInfo, setProfileInfo] = useState(null);
  const { data, isLoading, error } = useFetchState("api/auth/profile");

  // setProfileInfo(()=> data);
  return (
    data != null && (
      <>
        <DynamicTitle title="Profile" />
        {/* Header Section */}
        <Header />
        {/* <!-- BREADCRUMB --> */}
        <BreadCrumb
          data={[{ name: "Home", link: "/" }]}
          activeName={"Profile"}
        />
        {/* MAIN CONTENTS  */}
        {/* <!-- Personal Informatin --> */}

        <div className="section" style={{ paddingBottom: "0px" }}>
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- section title --> */}
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="title">Personal Information</h3>
                  <hr />
                  <PersonalInfo info={data.payload.user} />
                </div>
              </div>
              {/* <!-- /section title --> */}
            </div>
          </div>
        </div>
        {/* <!-- /Personal Informatin --> */}

        {/* <!-- profile photo --> */}
        <div
          id="breadcrumb"
          className="m-0"
          style={{ margin: "0px", paddingTop: "0px" }}
        >
          <hr />
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-12">
                <ProfileImage image={data.payload.user.image} />
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /profile photo --> */}

        {/* <!-- CHANGE PASSWORD --> */}
        <div className="section" style={{ paddingBottom: "0px" }}>
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- section title --> */}
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="title">Change Password</h3>
                  <hr />
                  <ChangePassword />
                </div>
              </div>
              {/* <!-- /section title --> */}
            </div>
          </div>
        </div>
        {/* <!-- /CHANGE PASSWORD --> */}
        {/* <!-- ADDRESS --> */}
        <hr style={{ margin: "0px" }} />
        <div
          className="section"
          style={{ paddingBottom: "0px", background: "#fbfbfc" }}
        >
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- section title --> */}
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="title">Present Address</h3>
                  <hr />
                  <PresentAddress info={data.payload.user} />
                </div>
              </div>
              {/* <!-- /section title --> */}
            </div>
          </div>
        </div>
        {/* <!-- /ADDRESS --> */}
        {/* ACCOUNT CONTROL */}
        <div className="m-0" style={{ marginTop: "0px", padding: "0px" }}>
          <hr style={{ marginTop: "0px" }} />
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-12">
                <AccountControl />
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* /ACCOUNT CONTROL */}

        {/* <!-- FOOTER --> */}

        <Footer />
        {/* <!-- /FOOTER --> */}
      </>
    )
  );
}
