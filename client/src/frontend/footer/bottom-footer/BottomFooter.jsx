import React from "react";
import FooterPaymentsData from "./data/FooterPaymentsData.json";
import FooterPayments from "./components/FooterPayments";

export default function BottomFooter() {
  return (
    <>
      {/* <!-- bottom footer --> */}
      <div id="bottom-footer" className="section">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="footer-payments">
                <FooterPayments data={FooterPaymentsData} />
              </ul>
              <span className="copyright">
                Copyright &copy;
                {new Date().getFullYear()} All rights reserved | This template
                is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a
                  href="https://facebook.com/mdrahatulrabbi"
                  target="_blank"
                  style={{ fontStyle: "italic", color: "yellow" }}
                >
                  Md Rahatul Rabbi
                </a>
              </span>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /bottom footer --> */}
    </>
  );
}
