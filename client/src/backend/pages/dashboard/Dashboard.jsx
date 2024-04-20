import React from "react";
import Banner from "../../banner/Banner";
import DynamicTitle from "../../components/DynamicTitle";
import SideBar from "../../side-bar/SideBar";
import Header from "../../header/Header";
import Content from "./components/content";
import Footer from "../../footer/Footer";
import { UseContext } from "../../../helper/use-context/UseContext";
import Preloader from "../../../preloader/Preloader";
import useFetchState from "../../../helper/use-fetch/useFetchState";
import ErrorPage500 from "../../../error-pages/500";

export default function Dashboard() {
  const { data, isLoading, error } = useFetchState(
    "api/auth/admin/profile-logo"
  );

  const user = data != null ? data.payload.user : null;
  const logos = data != null ? data.payload.logos : null;
  return isLoading ? (
    <Preloader />
  ) : user == null || user.isAdmin == false ? (
    error || <ErrorPage500/>
  ) : (
    <>
      <DynamicTitle title={"Dashboard"} />
      <div className="container-scroller">
        {/* <Banner /> */}
        <UseContext.Provider value={{ user, logos }}>
          <SideBar />
        </UseContext.Provider>
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper">
          <UseContext.Provider value={{ user, logos }}>
            <Header />
          </UseContext.Provider>
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
