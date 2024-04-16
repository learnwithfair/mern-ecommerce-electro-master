import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/profile.css";
import useFetch from "../../../../helper/use-fetch/useFetch";

export default function PersonalInfo(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(props.info);


  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
  };

 
  // Update Profile Contact Info
  const userPersonalInfoUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (userInfo.name) {
      const info = JSON.parse(
        await useFetch("api/auth/update-profile-personal-info", userInfo, "put")
      );

      // Set State value after click submit button
      if (info.data != null) {
        setUserInfo(info.data.payload.updatedUser);
        // successMessage("Succefully Updated");
      } else {
        setUserInfo(null);
      }
      // warningMessage(info.error);
      setIsLoading(false);
    } else {
      // errorMessage();
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-sample"
            id="userRegistrationForm"
            onSubmit={userPersonalInfoUpdate}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={handleOnChange}
                      value={userInfo.name || ""}
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your your Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      className="form-control"
                      placeholder="Your Email"
                      title="example@gmail.com"
                      required
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
            
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label" htmlFor="country">
                    Country
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="country"
                      id="country"
                      onChange={handleOnChange}
                      className="form-control"
                    >
                      <option defaultValue="" disabled selected>
                        Select Country
                      </option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label" htmlFor="city">
                    City
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="city"
                      id="city"
                      onChange={handleOnChange}
                      className="form-control"
                    >
                      <option defaultValue="" disabled selected>
                        Select City
                      </option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Lalmonirhat">Lalmonirhat</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="profile-button-align">
                <button type="submit" className="btn btn-success" name="save">
                  {isLoading ? "Saving" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
