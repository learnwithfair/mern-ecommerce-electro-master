import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SideNavData from "./data/SideNavData.json";
import { Link, NavLink } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";

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

  const hundleActiveItem = (e) => {
    // e.target
  };
  return (
    <>
      {/* <!-- partial:partials/_sidebar.html --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src="./src/backend/assets/images/logo.svg" alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">
            <img src="./src/backend/assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img
                    className="img-xs rounded-circle "
                    src="src/backend/assets/images/faces/face15.jpg"
                    alt=""
                  ></img>
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-bs-toggle="dropdown">
                <i className="mdi mdi-dots-vertical"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                aria-labelledby="profile-dropdown"
              >
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Account settings
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Change Password
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      To-do list
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
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
                onClick={hundleActiveItem}
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
