import React from "react";
import AdminList from "./components/AdminList";
import DynamicTitle from "../../components/DynamicTitle";
import SideBar from "../../side-bar/SideBar";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import useFetchState from "../../../helper/use-fetch/useFetchState";
import Preloader from "../../../preloader/Preloader";
import { UseContext } from "../../../helper/use-context/UseContext";

export default function Admin() {
  const { data, isLoading, error } = useFetchState("api/auth/profile");

  const user = data != null ? data.payload.user : null;
  return user == null || user.isAdmin == false || user.isBanned == true ? (
    error || "No Accesible"
  ) : isLoading ? (
    <Preloader />
  ) : (
    <>
      <DynamicTitle title={"Manage-Products"} />
      <div className="container-scroller">
        <UseContext.Provider value={{ user }}>
          <SideBar />
        </UseContext.Provider>

        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper">
          <UseContext.Provider value={{ user }}>
            <Header />
          </UseContext.Provider>

          {/* |||||||||| */}
          {/* <!-- partial --> */}
          <div className="main-panel">
            <AdminList />

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
