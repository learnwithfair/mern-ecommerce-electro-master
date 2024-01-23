import React from "react";
import TopFooter from "./top-footer/TopFooter";
import BottomFooter from "./bottom-footer/BottomFooter";
// import Script from "./script/Script";

export default function Footer() {
  return (
    <>
      {/* <!-- FOOTER --> */}
      <footer id="footer">
        {/* <!-- top footer --> */}
        <TopFooter />
        {/* <!-- /top footer --> */}

        {/* <!-- bottom footer --> */}
        <BottomFooter />
        {/* <!-- /bottom footer --> */}
      </footer>
      {/* <!-- /FOOTER --> */}

      {/* <!-- jQuery Plugins --> */}
      {/* <Script /> */}
    </>
  );
}
