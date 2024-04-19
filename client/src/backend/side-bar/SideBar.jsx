import React, { useEffect, useState } from "react";
import SideNavData from "./data/SideNavData.json";
import { NavLink } from "react-router-dom";
import Logo from "./components/Logo";
import ProfilePhoto from "./components/ProfilePhoto";
// import $ from "jquery";

export default function SideBar() {
  const [activeParentLink, setActiveParentLink] = useState("");
  // const navItem =

  useEffect(() => {
    var sidebar = $(".sidebar");
    // Close other submenu in sidebar on opening any
    sidebar.on("show.bs.collapse", ".collapse", function () {
      sidebar.find(".collapse.show").collapse("hide");
    });
  }, []);

  useEffect(() => {
    SideNavData.map((item, i) => {
      if (item.sublink.length != 0) {
        if (
          item.sublink.find((subLink, j) => subLink.link === location.pathname)
        ) {
          setActiveParentLink(item.link);
        }
      }
    });
  }, []);

  return (
    <>
      {/* <!-- partial:partials/_sidebar.html --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <Logo />
        <ul className="nav">
          <ProfilePhoto />
          {/* Navigation Nav item start  */}
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>

          {SideNavData.map((item, i) =>
            item.sublink.length === 0 ? (
              <li
                key={i}
                className={
                  location.pathname === item.link
                    ? "nav-item menu-items active"
                    : "nav-item menu-items"
                }
              >
                <NavLink className="nav-link" exact="true" to={item.link}>
                  <span className="menu-icon">
                    <i className={item.icon}></i>
                  </span>
                  <span className="menu-title">{item.name}</span>
                </NavLink>
              </li>
            ) : (
              <li
                key={i}
                className={
                  item.link === activeParentLink
                    ? "nav-item menu-items active"
                    : "nav-item menu-items"
                }
              >
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  exact="true"
                  href={"#" + item.link}
                  aria-expanded="false"
                  aria-controls={item.link}
                >
                  <span className="menu-icon">
                    <i className="mdi mdi-laptop"></i>
                  </span>
                  <span className="menu-title">{item.name}</span>
                  <i className="menu-arrow"></i>
                </a>
                <div
                  className={
                    item.link === activeParentLink
                      ? "collapse show"
                      : "collapse"
                  }
                  id={item.link}
                >
                  <ul className="nav flex-column sub-menu">
                    {item.sublink.map((subitem, j) => (
                      <li key={j} className="nav-item">
                        <NavLink
                          className={(navLink) =>
                            navLink.isActive ? "nav-link active" : "nav-link"
                          }
                          exact="true"
                          to={subitem.link}
                        >
                          {subitem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}
