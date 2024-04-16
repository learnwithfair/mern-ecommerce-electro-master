import React, { useState } from "react";
import DynamicTitle from "../../../backend/components/DynamicTitle";
import { NavLink, redirect } from "react-router-dom";
import useFetch from "../../../helper/use-fetch/useFetch";

export default function ForgotPassword() {
  const [forgotPasswordMgs, setForgotPasswordMgs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({});
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo((loginInfo) => ({ ...loginInfo, [name]: value }));
  };

  // Forgot Password After submit button click
  const userForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (loginInfo.email) {
      const info = JSON.parse(
        await useFetch("api/auth/forgot-password", loginInfo, "put")
      );

      // Set State value after click submit button
    
      if (info.data) {
          console.log(info.data);
        setForgotPasswordMgs(info.data.message);
      } else {
        console.error(info.error);
        setForgotPasswordMgs(null);
      }
      
      // warningMessage(info.error);
      setIsLoading(false);
    } else {
      // errorMessage();
    }
  };
  return (
    <>
      <DynamicTitle title={"Forgot-Password"} />
      <div className="container-scroller auth login-bg">
        <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
          <div className="row w-100 m-0">
            <div className="full-page-wrapper d-flex align-items-center">
              <div className="col-md-4 grid-margin stretch-card mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title text-center">Forgot Password</h1>

                    <hr />
                    <p className="text-success">
                      {forgotPasswordMgs != null && forgotPasswordMgs}
                    </p>
                    <form
                      className="forms-sample"
                      action=""
                      method="post"
                      encType="multipart/form-data"
                      id="login-form"
                      onSubmit={userForgotPassword}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="email"
                          className="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            onChange={handleOnChange}
                            value={loginInfo.email || ""}
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            required
                            autoComplete="on"
                          />
                        </div>
                      </div>

                      <hr />

                      <div className="col d-flex justify-content-end">
                        <button type="submit" className="btn btn-warning me-2">
                          {isLoading ? "Sending" : "Send"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- row ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </>
  );
}
