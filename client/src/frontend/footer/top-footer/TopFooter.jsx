import React from "react";
import FooterColumn from "./components/FooterColumn";

import CategoryData from "./data/CategoryData.json";
import InformationData from "./data/InformationData.json";
import ServiceData from "./data/ServiceData.json";
import AboutUsData from "./data/AboutUsData.json";
import FooterLinks from "./components/FooterLinks";

export default function TopFooter() {
  return (
    <>
      {/* <!-- top footer --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="footer-links">
                  <FooterLinks data={AboutUsData} />
                </ul>
              </div>
            </div>
            {/* col-md-3 col-xs-6 */}
            <FooterColumn title={"Categories"} data={CategoryData} />
            <div className="clearfix visible-xs"></div>
            {/* col-md-3 col-xs-6  */}
            <FooterColumn title={"Information"} data={InformationData} />
            {/* col-md-3 col-xs-6 */}
            <FooterColumn title={"Service"} data={ServiceData} />
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /top footer --> */}
    </>
  );
}
