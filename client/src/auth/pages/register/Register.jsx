import React from "react";
import { NavLink } from "react-router-dom";

import DynamicTitle from "../../../backend/components/DynamicTitle";

export default function Register() {
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
                    <form className="form-sample">
                      <p className="card-description"> Personal info </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              First Name
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Last Name
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Gender
                            </label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Date of Birth
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                placeholder="dd/mm/yyyy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Category
                            </label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>Category1</option>
                                <option>Category2</option>
                                <option>Category3</option>
                                <option>Category4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Membership
                            </label>
                            <div className="col-sm-4">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="membershipRadios"
                                    id="membershipRadios1"
                                    value=""
                                    defaultChecked
                                  />{" "}
                                  Free{" "}
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="membershipRadios"
                                    id="membershipRadios2"
                                    value="option2"
                                  />{" "}
                                  Professional{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="card-description"> Address </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Address 1
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              State
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Address 2
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Postcode
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              City
                            </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Country
                            </label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>America</option>
                                <option>Italy</option>
                                <option>Russia</option>
                                <option>Britain</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group row">
                        <div className="col d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Submit
                          </button>
                          <button className="btn btn-dark">Cancel</button>
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
