import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DynamicTitle from "../../../backend/components/DynamicTitle";
import axios from "axios";
// import useFetch from "../../../frontend/use-fetch/useFetch";
// import { clientURL } from "../../../../../server/resources/js/secret/secret";

export default function Register() {
  const [userInfo, setUserInfo] = useState({});
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
  };
  const userRegistration = (e) => {
    e.preventDefault();

    // const { data, isLoading, error } = useFetch(
    //   "api/users/process-register",
    //   "post",
    //   userInfo
    // );
    // setTimeout(() => {
    //   axios
    //     .post({
    //       url: "http://localhost:3000/api/users/process-register",
    //       data: JSON.stringify({
    //         name:"R",
    //         email:"rat@gamil.com",
    //         password:"@Rahatul123",
    //         phone:"01790224950",
    //         address:"dsjf"

    //       }),
    //     })
    //     .then((res) => {
    //       // const items = res.data;
    //       console.log(res);
    //     })
    //     .catch((err) => console.error(err));
    // }, 1000);

    axios({
      url: "http://localhost:3000/api/users/process-register",
      method: "post",
      data: JSON.stringify({
        name: "Rahat Kabir",
        email: "ratr@gamil.com",
        password: "@Rahatul125",
        phone: "01790224950",
        address: "dsjf",
      }),
    })
      .then((res) => alert("Successfully Added"))
      .catch((err) => console.log(err));
    //  url: "https://jsonplaceholder.typicode.com/posts",
    // method: "post",
    // data: JSON.stringify({
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // }),
    // console.log(data);
    // console.log(isLoading);
    // console.log(error);
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
                            <label className="col-sm-3 col-form-label">
                              <strong className="text-danger">* </strong>Full
                              Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                onChange={handleOnChange}
                                value={userInfo.name || ""}
                                name="name"
                                className="form-control"
                                placeholder="Enter your First Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Last Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                onChange={handleOnChange}
                                name="lastName"
                                value={userInfo.lastName || ""}
                                className="form-control"
                                placeholder="Enter your Last Name"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              <strong className="text-danger">* </strong>Email
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                onChange={handleOnChange}
                                name="email"
                                value={userInfo.email || ""}
                                className="form-control"
                                placeholder="Enter your Email"
                                title="example@gmail.com"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              <strong className="text-danger">* </strong>
                              Password
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="password"
                                onChange={handleOnChange}
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
                            <label className="col-sm-3 col-form-label">
                              <strong className="text-danger">* </strong>Phone
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="tel"
                                onChange={handleOnChange}
                                name="phone"
                                value={userInfo.phone || "+8801"}
                                className="form-control"
                                pattern="[+8801]{5}[0-9]{9}"
                                title="+8801000000000"
                                placeholder="Enter your Mobile Number"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Address
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                onChange={handleOnChange}
                                name="address"
                                value={userInfo.address || ""}
                                placeholder="Write your address"
                                className="form-control"
                              />
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
                            Submit
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
