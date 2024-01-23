import React from "react";
import { Helmet } from "react-helmet";

import "../assets/css/slick.css"; // Slick
import "../assets/css/slick-theme.css";
import "../assets/css/nouislider.min.css"; // nouislider
import "../assets/css/font-awesome.min.css"; //  Font Awesome Icon
import "../assets/css/modify.css"; // Modify stlylesheet

// Footer JavaScript
import "../assets/js/jquery.min.js";
import "../assets/js/bootstrap.min.js";
import "../assets/js/slick.min.js";
import "../assets/js/nouislider.min.js";
import "../assets/js/jquery.zoom.min.js";

export default function DynamicTitle(props = "Home") {
  return (
    <Helmet>
      <title>E-commerce || {props.title}</title>
      {/* <!-- Google font --> */}
      {/* <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
      rel="stylesheet"
    /> */}
      {/* <!-- Bootstrap --> */}
      <link
        type="text/css"
        rel="stylesheet"
        href="./src/frontend/assets/css/bootstrap.min.css"
      />
      {/* Custom stlyleshee */}
      <link
        type="text/css"
        rel="stylesheet"
        href="./src/frontend/assets/css/style.css"
      />
      {/* Footer JS  */}
      <script src="./src/frontend/assets/js/main.js"></script>
    </Helmet>
  );
}
