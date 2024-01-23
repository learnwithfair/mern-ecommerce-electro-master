import React from "react";
import DynamicTitle from "../../../backend/components/DynamicTitle";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <DynamicTitle title={"Login"} />
      <div className="container-scroller auth login-bg">
        <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
          <div className="row w-100 m-0">
            <div className="full-page-wrapper d-flex align-items-center">
              <div className="col-md-6 grid-margin stretch-card mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title text-center">Login Here</h1>
                    <hr />
                    <form className="forms-sample">
                      <div className="form-group row">
                        <label
                          for="exampleInputUsername2"
                          className="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsername2"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputEmail2"
                          className="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail2"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputMobile"
                          className="col-sm-3 col-form-label"
                        >
                          Mobile
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputMobile"
                            placeholder="Mobile number"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputPassword2"
                          className="col-sm-3 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputConfirmPassword2"
                          className="col-sm-3 col-form-label"
                        >
                          Re Password
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputConfirmPassword2"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />{" "}
                          Remember me{" "}
                        </label>
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
