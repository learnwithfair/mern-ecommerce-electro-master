import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DynamicTitle from "../../../backend/components/DynamicTitle";
import useFetch from "../../../helper/use-fetch/useFetch.jsx";

export default function Register() {
  var userFullName = "";
  const [isLoading, setIsLoading] = useState(false);
  const [registrationMgs, setRegistrationMgs] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
  };
  const userRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Loading On

    // Name = First Name + Last Name
    const nameFiled = "name";
    if (userInfo.lastName) {
      userFullName = userInfo.firstName + " " + userInfo.lastName;
    } else {
      userFullName = userInfo.firstName;
    }
    setUserInfo((userInfo) => ({
      ...userInfo,
      [nameFiled]: userFullName,
    }));
    const info = JSON.parse(
      await useFetch("api/users/process-register", userInfo)
    );

    // Set State value after click submit button
    if (info.data != null) {
      alert(info.data.message);
      console.log(info.data);
      setRegistrationMgs(info.data.message);
      // successMessage("Successfully Registered");
    } else {
      console.error(info.error);
    }

    setIsLoading(false); // Loadig Off
  };
  return (
    <>
      <DynamicTitle title="Registration" />

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="col-lg-10 col-md-12 grid-margin mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title text-center">
                      Registration Form
                    </h1>
                    <hr />
                    <p className="text-success">
                      {registrationMgs != null && registrationMgs}
                    </p>

                    <form
                      action=""
                      method="post"
                      encType="multipart/form-data"
                      className="form-sample"
                      id="userRegistrationForm"
                      onSubmit={userRegistration}
                    >
                      <p className="card-description text-danger">
                        Required Field *
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              htmlFor="firstName"
                              className="col-sm-3 col-form-label"
                            >
                              <strong className="text-danger">* </strong>First
                              Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                onChange={handleOnChange}
                                name="firstName"
                                id="firstName"
                                value={userInfo.firstName || ""}
                                className="form-control"
                                placeholder="Enter your First Name"
                                title="Rahatul"
                                required
                                autoComplete="on"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              htmlFor="lastName"
                              className="col-sm-3 col-form-label"
                            >
                              Last Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                onChange={handleOnChange}
                                name="lastName"
                                id="lastName"
                                value={userInfo.lastName || ""}
                                className="form-control"
                                placeholder="Enter your Last Name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              htmlFor="email"
                              className="col-sm-3 col-form-label"
                            >
                              <strong className="text-danger">* </strong>Email
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                onChange={handleOnChange}
                                name="email"
                                id="email"
                                value={userInfo.email || ""}
                                className="form-control"
                                placeholder="Enter your Email"
                                title="example@gmail.com"
                                required
                                autoComplete="on"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              htmlFor="password"
                              className="col-sm-3 col-form-label"
                            >
                              <strong className="text-danger">* </strong>
                              Password
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="password"
                                onChange={handleOnChange}
                                id="password"
                                name="password"
                                value={userInfo.password || ""}
                                className="form-control"
                                placeholder="Enter your Password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="card-description"> Contact Info </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              htmlFor="phone"
                              className="col-sm-3 col-form-label"
                            >
                              <strong className="text-danger">* </strong>Phone
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="tel"
                                onChange={handleOnChange}
                                name="phone"
                                id="phone"
                                value={userInfo.phone || "+8801"}
                                className="form-control"
                                pattern="[+8801]{5}[0-9]{9}"
                                title="+8801000000000"
                                placeholder="Enter your Mobile Number"
                                autoComplete="on"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              htmlFor="address"
                              className="col-sm-3 col-form-label"
                            >
                              <strong className="text-danger">* </strong>Address
                            </label>
                            <div className="col-sm-9">
                              <textarea
                                type="text"
                                onChange={handleOnChange}
                                name="address"
                                id="address"
                                value={userInfo.address || ""}
                                placeholder="Write your address"
                                className="form-control"
                                autoComplete="off"
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="form-group row">
                        <div className="col d-flex justify-content-end">
                          <button
                            className="btn btn-danger me-2 ps-4 pe-4"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-success"
                            name="submit"
                          >
                            {isLoading ? "Proces.." : "Submit"}
                          </button>
                        </div>
                      </div>
                      <div className="col d-flex justify-content-center mt-5 ">
                        <button className="btn btn-facebook me-2 col-lg-3 col-md-4 col-sm-6">
                          <i className="mdi mdi-facebook"></i> Facebook
                        </button>
                        <button className="btn btn-google col-lg-3 col-md-4 col-sm-6">
                          <i className="mdi mdi-google-plus"></i> Google plus
                        </button>
                      </div>
                      <p className="sign-up">
                        Do have an Account? &nbsp;
                        <NavLink exact="true" to="/api/auth/login">
                          Login
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
