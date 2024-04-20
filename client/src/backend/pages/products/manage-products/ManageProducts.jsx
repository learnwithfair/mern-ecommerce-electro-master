import React from "react";
import DynamicTitle from "../../../components/DynamicTitle";
import SideBar from "../../../side-bar/SideBar";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";
import ProductList from "./components/ProductList";
import useFetchState from "../../../../helper/use-fetch/useFetchState";
import Preloader from "../../../../preloader/Preloader";
import { UseContext } from "../../../../helper/use-context/UseContext";
import ErrorPage500 from "../../../../error-pages/500";

export default function ManageProducts() {
  const { data, isLoading, error } = useFetchState(
    "api/auth/admin/profile-logo"
  );

  const user = data != null ? data.payload.user : null;
  const logos = data != null ? data.payload.logos : null;
  return isLoading ? (
    <Preloader />
  ) : user == null || user.isAdmin == false ? (
    error || <ErrorPage500 />
  ) : (
    <>
      <DynamicTitle title={"Manage-Products"} />
      <div className="container-scroller">
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
            <div className="content-wrapper">
              <ProductList />
            </div>

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
