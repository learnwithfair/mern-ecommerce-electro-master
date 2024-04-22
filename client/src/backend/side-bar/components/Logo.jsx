import React, { useContext } from "react";
import CLIENT_URL from "../../../config/Config";
import minilogo from "../../assets/images/logo-mini.svg";
import { UseContext } from "../../../helper/use-context/UseContext";

export default function Logo() {
  const { logos } = useContext(UseContext);

  const logo = logos && logos.find((lg) => "F-Header" === lg.location);
  return (
    logo != null && (
      <>
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="/">
            <img src={CLIENT_URL + "images/logos/" + logo.logo} alt="logo" />
            {/* <img src="./src/backend/assets/images/logo.svg" alt="logo" /> */}
          </a>
          <a className="sidebar-brand brand-logo-mini" href="/">
            <img src={minilogo} alt="logo" />
            {/* <img src="./src/backend/assets/images/logo-mini.svg" alt="logo" /> */}
          </a>
        </div>
      </>
    )
  );
}
