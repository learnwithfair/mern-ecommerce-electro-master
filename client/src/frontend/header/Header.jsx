import React, { useEffect, useState } from "react";

import TopHeader from "./top-header/TopHeader";
import SearchBar from "./search-bar/SearchBar";
import Account from "./account/Account";
import Navigation from "./navigation/Navigation";

import Logo from "../../../../database/logo.json";
import Category from "../../../../database/category.json";
import { UseContext } from "../use-context/UseContext";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [logo, setLogo] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    setLogo(
      Logo.find((lg) => lg.location === "F-Header" && lg.isActive === true).logo
    );
  }, []);

  useEffect(() => {
    setCategory(Category);
  }, []);
  return (
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
                    <img src={logo} alt=""></img>
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
