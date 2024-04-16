import React, { useState } from "react";
import DynamicTitle from "../../../backend/components/DynamicTitle";
import { NavLink, redirect } from "react-router-dom";
import useFetch from "../../../helper/use-fetch/useFetch";
import "../profile/assets/profile.css";

export default function ResetPassword() {
  const [resetPasswordMgs, setResetPasswordMgs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isNewPasswordShow, setNewPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
  };

  // New Password Show Icon Hundle
  const handleNewPasswordShow = (e) => {
    setNewPasswordShow(!isNewPasswordShow);
  };
  // Confirm Password Show Icon Hundle
  const handleConfirmPasswordShow = (e) => {
    setConfirmPasswordShow(!isConfirmPasswordShow);
  };

  // reset Password After submit button click
  const userResetPassword = async (e) => {
    e.preventDefault();
    const token = new URLSearchParams(window.location.search).get("token");
    setIsLoading(true);
    if (userInfo.newPassword && userInfo.confirmPassword && token) {
      const info = JSON.parse(
        await useFetch("api/auth/reset-password/" + token, userInfo, "put")
      );

      // Set State value after click submit button

      if (info.data) {
        // Redirect to Profile Page
        setUserInfo({});
       console.log(info.data.payload.userWithoutPasssword);
        setResetPasswordMgs(info.data.message);
      } else {
        console.error(info.error);
        setResetPasswordMgs(null);
      }

      // warningMessage(info.error);
      setIsLoading(false);
    } else {
      alert("Token Not Found. Please try again");
      // errorMessage();
    }
  };
  return (
    <>
      <DynamicTitle title={"Reset-Password"} />
      <div className="container-scroller auth login-bg">
        <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
          <div className="row w-100 m-0">
            <div className="full-page-wrapper d-flex align-items-center">
              <div className="col-md-6 grid-margin stretch-card mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title text-center">Reset Password</h1>

                    <hr />
                    <p className="text-success">
                      {resetPasswordMgs != null && resetPasswordMgs}
                    </p>
                    <form
                      className="forms-sample"
                      action=""
                      method="post"
                      encType="multipart/form-data"
                      id="reset-form"
                      onSubmit={userResetPassword}
                    >
                      <div className="form-group row">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="newPassword"
                        >
                          New Password
                        </label>
                        <div className="col-sm-9">
                          <div
                            className="form-group"
                            style={{ display: "flex", borderRight: "none" }}
                          >
                            <input
                              type={isNewPasswordShow ? "text" : "password"}
                              className="form-control password-right-border"
                              placeholder="Enter your New Password"
                              name="newPassword"
                              id="newPassword"
                              onChange={handleOnChange}
                              value={userInfo.newPassword || ""}
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                              required
                            />

                            <span onClick={handleNewPasswordShow}>
                              {isNewPasswordShow ? (
                                <i
                                  className="fa fa-eye form-control input-group-text"
                                  id="r"
                                ></i>
                              ) : (
                                <i className="fa fa-eye-slash form-control input-group-text"></i>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="confirmPassword"
                        >
                          Confirm Password
                        </label>
                        <div className="col-sm-9">
                          <div
                            className="form-group"
                            style={{ display: "flex", borderRight: "none" }}
                          >
                            <input
                              type={isConfirmPasswordShow ? "text" : "password"}
                              className="form-control password-right-border"
                              placeholder="Enter your Confirm Password"
                              name="confirmPassword"
                              id="confirmPassword"
                              onChange={handleOnChange}
                              value={userInfo.confirmPassword || ""}
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                              required
                            />

                            <span onClick={handleConfirmPasswordShow}>
                              {isConfirmPasswordShow ? (
                                <i
                                  className="fa fa-eye form-control input-group-text"
                                  id="r"
                                ></i>
                              ) : (
                                <i className="fa fa-eye-slash form-control input-group-text"></i>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="col d-flex justify-content-end">
                        <button type="submit" className="btn btn-warning me-2">
                          {isLoading ? "Saving" : "Save"}
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
