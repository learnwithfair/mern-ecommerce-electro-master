import React, { Component } from "react";
import DynamicTitle from "../backend/components/DynamicTitle";

class ErrorPage500 extends Component {
  render() {
    return (
      <>
        <DynamicTitle title="Error||404" />
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
            <div className="content-wrapper d-flex align-items-center text-center error-page bg-info">
              <div className="row  w-100 m-0 flex-grow">
                <div className="col-lg-7 mx-auto text-white">
                  <div className="row align-items-center d-flex flex-row">
                    <div className="col-lg-6 text-lg-right pr-lg-4">
                      <h1 className="display-1 mb-0">500</h1>
                    </div>
                    <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                      <h2>SORRY!</h2>
                      <h3 className="font-weight-light">
                        Internal server error!
                      </h3>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 text-center mt-xl-2">
                      <a className="text-white font-weight-medium" href="/">
                        Back to home
                      </a>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 mt-xl-2">
                      <p className="text-white font-weight-medium text-center">
                        Copyright &copy; 2024 All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- page-body-wrapper ends --> */}
        </div>
      </>
    );
  }
}

export default ErrorPage500;
