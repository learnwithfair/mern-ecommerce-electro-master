import React from "react";
import { NavLink } from "react-router-dom";

export default function TopHeader() {
  return (
    <>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="tel:+01790224950">
                <i className="fa fa-phone"></i> +021-95-51-84
              </a>
            </li>
            <li>
              <a href="mailto:+rahatul.ice.09.pust@gmail.com">
                <i className="fa fa-envelope-o"></i> email@email.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
              </a>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="#">
                <i className="fa fa-dollar"></i> USD
              </a>
            </li>
            <li>
              {localStorage.getItem("authentication") == "true" ? (
                <NavLink exact="true" to="/profile">
                  <i className="fa fa-user-o"></i> Profile
                </NavLink>
              ) : (
                <a href="/api/auth/login">
                  <i className="fa fa-sign-in"></i> Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
