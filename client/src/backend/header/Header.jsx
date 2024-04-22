import React, { useContext, useState } from "react";
import Search from "./search/Search";
import $ from "jquery";
import CLIENT_URL from "../../config/Config";
import { NavLink } from "react-router-dom";
import useFetch from "../../helper/use-fetch/useFetch";
import { UseContext } from "../../helper/use-context/UseContext";
import minilogo from "../assets/images/logo-mini.svg";

export default function Header() {
  const [isMinimize, setIsMinize] = useState(false);
  const [isOfCanvas, setIsOfCanvas] = useState(false);
  const { user, logos } = useContext(UseContext);

  const logo = logos && logos.find((lg) => "F-Header" === lg.location);

  const minimize = () => {
    var body = $("body");
    setIsMinize(!isMinimize);
    if (
      body.hasClass("sidebar-toggle-display") ||
      body.hasClass("sidebar-absolute")
    ) {
      body.toggleClass("sidebar-hidden");
    } else {
      body.toggleClass("sidebar-icon-only");
    }
  };
  const offCanvas = () => {
    setIsOfCanvas(!isOfCanvas);
    $(".sidebar-offcanvas").toggleClass("active");
  };

  // Logout Function
  const userLogout = async (e) => {
    e.preventDefault();
    const info = JSON.parse(await useFetch("api/auth/logout", {}, "get"));
    if (info.data) {
      alert("Succefully Logout");
      console.log(info.data);
      // Move to Home Page
      // successMessage("Succefully Logout");
    } else {
      console.error(info.error);
    }
    // warningMessage(info.error);
  };
  return (
    user != null && (
      <>
        {/* <!-- partial:partials/_navbar.html --> */}
        <nav className="navbar p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src={minilogo} alt="logo" />
            </a>
          </div>
          <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
            <button
              className="navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
              onClick={minimize}
            >
              <span
                className={
                  "menu-icon-resize " +
                  (isMinimize ? "text-white mdi mdi-close" : "mdi mdi-menu")
                }
              ></span>
            </button>
            <Search />
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown d-none d-lg-block">
                <a
                  className="nav-link btn btn-success create-new-button"
                  id="createbuttonDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  + Create New Project
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="createbuttonDropdown"
                >
                  <h6 className="p-3 mb-0">Projects</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-file-outline text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Software Development
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-web text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        UI Development
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-layers text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Software Testing
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">See all projects</p>
                </div>
              </li>
              <li className="nav-item nav-settings d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-view-grid"></i>
                </a>
              </li>
              <li className="nav-item dropdown border-left">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="messageDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-email"></i>
                  <span className="count bg-success"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="messageDropdown"
                >
                  <h6 className="p-3 mb-0">Messages</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="src/backend/assets/images/faces/face4.jpg"
                        alt="image"
                        className="rounded-circle profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Mark send you a message
                      </p>
                      <p className="text-muted mb-0"> 1 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="src/backend/assets/images/faces/face2.jpg"
                        alt="image"
                        className="rounded-circle profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Cregh send you a message
                      </p>
                      <p className="text-muted mb-0"> 15 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="src/backend/assets/images/faces/face3.jpg"
                        alt="image"
                        className="rounded-circle profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Profile picture updated
                      </p>
                      <p className="text-muted mb-0"> 18 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">4 new messages</p>
                </div>
              </li>
              <li className="nav-item dropdown border-left">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="mdi mdi-bell"></i>
                  <span className="count bg-danger"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Event today</p>
                      <p className="text-muted ellipsis mb-0">
                        Just a reminder that you have an event today
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Settings</p>
                      <p className="text-muted ellipsis mb-0">
                        Update dashboard
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-link-variant text-warning"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Launch Admin</p>
                      <p className="text-muted ellipsis mb-0">
                        {" "}
                        New admin wow!{" "}
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">See all notifications</p>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="profileDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <div className="navbar-profile">
                    <img
                      className="img-xs rounded-circle admin_picture"
                      src={
                        CLIENT_URL +
                        "images/users/" +
                        (user.image == "default-image"
                          ? "default-user-image.png"
                          : user.image)
                      }
                      alt={user.name}
                    />

                    <span className="count bg-success"></span>

                    <i className="mdi mdi-menu-down d-sm-block"></i>
                    <p className="mb-0 d-none d-sm-block navbar-profile-name"></p>
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="profileDropdown"
                >
                  <h6 className="p-3 mb-0">Profile</h6>
                  <div
                    className="dropdown-divider "
                    id="profile-view-hidden"
                  ></div>
                  <a
                    href="#"
                    className="dropdown-item preview-item"
                    id="profile-view-hidden"
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-account-circle text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Profile</p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <form method="POST" action="" x-data="true">
                    <a className="dropdown-item preview-item" href="">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <i className="mdi mdi-logout text-danger"></i>
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <p
                          className=" preview-subject mb-1"
                          onClick={userLogout}
                        >
                          Logout
                        </p>
                      </div>
                    </a>
                  </form>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">
                    <NavLink
                      exact="true"
                      to="/profile"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      Advanced settings
                    </NavLink>
                  </p>
                </div>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
              onClick={offCanvas}
            >
              <span
                className={
                  "menu-icon-resize  " +
                  (isOfCanvas
                    ? "text-white mdi mdi-close"
                    : "mdi mdi-format-line-spacing")
                }
              ></span>
            </button>
          </div>
        </nav>
      </>
    )
  );
}
