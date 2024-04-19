import React from "react";
import CLIENT_URL from "../../../config/Config";
import useFetchState from "../../../helper/use-fetch/useFetchState";
import minilogo from "../../assets/images/logo-mini.svg"

export default function Logo() {
  const { data, isLoading, error } = useFetchState("api/logo/show-header-logo");
  const logo = data != null ? data.payload.logo : null;
  return logo == null ? (
    error
  ) : (
    <>
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="/">
          <img src={CLIENT_URL + "images/logos/" + logo.logo} alt="logo" />
          {/* <img src="./src/backend/assets/images/logo.svg" alt="logo" /> */}
        </a>
        <a className="sidebar-brand brand-logo-mini" href="/">
            <img src={minilogo}alt="logo" />
          {/* <img src="./src/backend/assets/images/logo-mini.svg" alt="logo" /> */}
        </a>
      </div>
    </>
  );
}
