import React, { useEffect, useState } from "react";

import TopHeader from "./top-header/TopHeader";
import SearchBar from "./search-bar/SearchBar";
import Account from "./account/Account";
import Navigation from "./navigation/Navigation";
import { NavLink } from "react-router-dom";
import useFetchState from "../../helper/use-fetch/useFetchState";
import Preloader from "../../preloader/Preloader";
import useFetch from "../../helper/use-fetch/useFetch";
import { UseContext } from "../../helper/use-context/UseContext";
import CLIENT_URL from "../../config/Config";

export default function Header() {
  const [logo, setLogo] = useState(null);
  const { data, isLoading, error } = useFetchState("api/category/show-all");
  const category = data != null ? data.payload.categories : null;

  // const { data, isLoading, error } = useFetchState("api/logo/show-header-logo");
  // const logo = data != null ? data.payload.logo : null;

  useEffect(() => {
    setTimeout(async () => {
      const info = JSON.parse(
        await useFetch("api/logo/show-header-logo", {}, "get")
      );

      setLogo(() => (info.data != null ? info.data.payload.logo : null));
    }, 1);
  }, []);

  return logo == null ? (
    error
  ) : isLoading ? (
    <Preloader />
  ) : (
    <>
      {/* <!-- HEADER --> */}
      <header>
        {/* <!-- TOP HEADER --> */}
        <TopHeader />
        {/* <!-- /TOP HEADER --> */}

        {/* <!-- MAIN HEADER --> */}
        <div id="header">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- LOGO --> */}
              <div className="col-md-3">
                <div className="header-logo">
                  <NavLink exact="true" to="/" className="logo">
                    <img src={CLIENT_URL+"images/logos/"+logo.logo} alt="Header-Logo"></img>
                  </NavLink>
                </div>
              </div>
              {/* <!-- /LOGO --> */}

              {/* <!-- SEARCH BAR --> */}
              <UseContext.Provider value={{ category }}>
                <SearchBar />
              </UseContext.Provider>

              {/* <!-- /SEARCH BAR --> */}

              {/* <!-- ACCOUNT --> */}
              <Account />
              {/* <!-- /ACCOUNT --> */}
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- /MAIN HEADER --> */}
      </header>
      {/* <!-- /HEADER --> */}

      {/* <!-- NAVIGATION --> */}
      {category && <Navigation data={category} />}

      {/* <!-- /NAVIGATION --> */}
    </>
  );
}
