import React, { useState } from "react";
import DynamicTitle from "../../../backend/components/DynamicTitle";
import { NavLink, redirect } from "react-router-dom";
import useFetch from "../../../helper/use-fetch/useFetch";

export default function Login() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({});
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo((loginInfo) => ({ ...loginInfo, [name]: value }));
  };

  // User Login After submit button click
  const userLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (loginInfo.email && loginInfo.password) {
      const info = JSON.parse(await useFetch("api/auth/login", loginInfo));

      // Set State value after click submit button
      if (info.data != null) {
        
        setLoginInfo({});
        setUserData(info.data.payload.userWithoutPasssword);
      } else {
        console.error(info.error);
        setUserData(null);
      }
      // warningMessage(info.error);
      setIsLoading(false);
    } else {
      // errorMessage();
    }
  };
  return (
    <>
      <DynamicTitle title={"Login"} />
      <div className="container-scroller auth login-bg">
        <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
          <div className="row w-100 m-0">
            <div className="full-page-wrapper d-flex align-items-center">
              <div className="col-md-4 grid-margin stretch-card mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title text-center">Login Here</h1>
                    {userData != null && userData._id }
                    <hr />
                    <form
                      className="forms-sample"
                      action=""
                      method="post"
                      // encType="multipart/form-data"
                      id="login-form"
                      onSubmit={userLogin}
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
                            autoComplete="true"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="password"
                          className="col-sm-3 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={handleOnChange}
                            name="password"
                            value={loginInfo.password || ""}
                            placeholder="Enter your Password"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="remember-me"
                          />{" "}
                          Remember me
                        </label>
                      </div>
                      <hr />
                      <div className="form-group row">
                        <div className="col d-flex justify-content-start">
                          <NavLink
                            exact="true"
                            to="/api/auth/forgot-password"
                            className="text-primary text-decoration-none text-small"
                          >
                            Forgot Password?
                          </NavLink>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            {isLoading ? "Loading" : "Login"}
                          </button>
                        </div>
                      </div>
                      <div className="col d-flex justify-content-center mt-5 ">
                        <button className="btn btn-facebook me-2 col-xl-4 col-sm-6">
                          <i className="mdi mdi-facebook"></i> Facebook
                        </button>
                        <button className="btn btn-google col-xl-4 col-sm-6">
                          <i className="mdi mdi-google"></i> Google
                        </button>
                      </div>
                      <p className="sign-up">
                        Don't have an Account? &nbsp;
                        <NavLink exact="true" to="/api/auth/register">
                          Register
                        </NavLink>
                      </p>
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
