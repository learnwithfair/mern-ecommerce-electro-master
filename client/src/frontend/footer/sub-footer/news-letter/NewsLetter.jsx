import React from "react";
import SocialLink from "../social-link/SocialLink";

export default function NewsLetter() {
  return (
    <>
      {/* <!-- NEWSLETTER --> */}
      <div id="newsletter" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
                <form id="newsletter" method="post">
                  <input
                    id="newsletter-email"
                    className="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button id="newsletter-btn" className="newsletter-btn">
                    <i className="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <SocialLink />
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /NEWSLETTER --> */}
    </>
  );
}
