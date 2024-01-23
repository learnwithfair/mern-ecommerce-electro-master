import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// import navItems from "./data/navItems.json";

export default function Navigation(props) {
  const menuList = [];
  const navItems = props.data;
  const length = navItems.length < 10 ? navItems.length : 10;
  for (let index = 0; index < length; index++) {
    // const url = "all-category?category=laptops";
    menuList[index] = (
      <li key={index}>
        <NavLink
          exact="true"
          to={"/all-category?category=" + navItems[index].catSlug}
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {navItems[index].catName}
        </NavLink>
      </li>
    );
  }
  return (
    <>
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- responsive-nav --> */}
          <div id="responsive-nav">
            {/* <!-- NAV --> */}
            <ul className="main-nav nav navbar-nav">
              <li>
                <NavLink
                  exact="true"
                  to="/"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  {"Home"}
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  exact="true"
                  to="/hot-deals"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  {"Hot Deals"}
                </NavLink>
              </li>
              {menuList}
              <li>
                <NavLink
                  exact="true"
                  to="/products"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  {"Products"}
                </NavLink>
              </li>
            </ul>
            {/* <!-- /NAV --> */}
          </div>
          {/* <!-- /responsive-nav --> */}
        </div>
        {/* <!-- /container --> */}
      </nav>
      <Outlet />
    </>
  );
}
