import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReloadJS from "./reload-js/ReloadJS";

// import "../assets/vendors/js/vendor.bundle.base.js"
// import "../assets/js/select2.js"

export default function DynamicTitle(props = "Home") {


  const reloadJSr = (
    <>
      <ReloadJS src="../../src/backend/assets/js/misc.js" />
      <ReloadJS src="../../src/backend/assets/js/select2.js" />
      <ReloadJS src="../../src/backend/assets/js/chart.js" />
      <ReloadJS src="../../src/backend/assets/js/dashboard.js" />
    </>
  );


  return (
    <>
      {reloadJSr}
      <Helmet>
        <title>E-commerce || {props.title}</title>

        <link
          rel="shortcut icon"
          href="../../src/backend/assets/images/favicon.png"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/mdi/css/materialdesignicons.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/css/vendor.bundle.base.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/jvectormap/jquery-jvectormap.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/flag-icon-css/css/flag-icon.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/owl-carousel-2/owl.carousel.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/owl-carousel-2/owl.theme.default.min.css"
        />
        {/* // For Multiple select */}
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/select2/select2.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"
        />
        {/* // Switch styles */}
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/css/switch.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/css/style.css"
        />
        {/* // Custom styles */}

        <link
          type="text/css"
          rel="stylesheet"
          href="../../src/backend/assets/css/custom.css"
        />
        {/* Footer JS  */}
        <script src="../../src/backend/assets/vendors/js/vendor.bundle.base.js"></script>
        <script src="../../src/backend/assets/vendors/chart.js/Chart.min.js"></script>
        <script src="../../src/backend/assets/vendors/progressbar.js/progressbar.min.js"></script>
        <script src="../../src/backend/assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
        <script src="../../src/backend/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <script src="../../src/backend/assets/vendors/owl-carousel-2/owl.carousel.min.js"></script>
        <script src="../../src/backend/assets/js/jquery.cookie.js"></script>
        {/* <script src="../../src/backend/assets/js/off-canvas.js"></script> */}
        <script src="../../src/backend/assets/js/hoverable-collapse.js"></script>
        <script src="../../src/backend/assets/js/misc.js"></script>
        <script src="../../src/backend/assets/js/settings.js"></script>
        <script src="../../src/backend/assets/js/todolist.js"></script>
        <script src="../../src/backend/assets/js/dashboard.js"></script>
        <script src="../../src/backend/assets/js/chart.js"></script>

        {/* <!-- For Multiple Select --> */}
        <script src="../../src/backend/assets/vendors/select2/select2.min.js"></script>
        {/* <script src="../../src/backend/assets/vendors/typeahead.js/typeahead.bundle.min.js"></script> */}
        {/* <script src="../../src/backend/assets/js/file-upload.js"></script> */}
        {/* <script src="../../src/backend/assets/js/typeahead.js"></script> */}
        <script src="../../src/backend/assets/js/select2.js"></script>
        {/* <!-- For Multiple Select --> */}

        {/* <!-- Start  js for Bootsrap --> */}
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
        {/* <!-- End  js for Bootsrap --> */}
        {/* <!-- start  js for datatable --> */}
        {/* <script
        src=" https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"
        crossorigin="anonymous"
      ></script> */}
        {/* <DataTable /> */}
        {/* // Call the dataTables jQuery plugin */}
      </Helmet>
    </>
  );
}
