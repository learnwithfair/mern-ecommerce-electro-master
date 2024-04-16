import React, { useState } from "react";
import "../assets/profile.css";
import useFetch from "../../../../helper/use-fetch/useFetch";

export default function ChangePassword() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOldPasswordShow, setOldPasswordShow] = useState(false);
  const [isNewPasswordShow, setNewPasswordShow] = useState(false);
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
  };
  // Old Password Show Icon Hundle
  const handleOldPasswordShow = (e) => {
    setOldPasswordShow(!isOldPasswordShow);
  };
  // New Password Show Icon Hundle
  const handleNewPasswordShow = (e) => {
    setNewPasswordShow(!isNewPasswordShow);
  };
  // Update Profile Password
  const userPasswordUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (userInfo.oldPassword && userInfo.newPassword) {
      const info = JSON.parse(
        await useFetch("api/auth/change-password", userInfo, "put")
      );

      if (info.data) {
        alert("Succefully Updated");

        // successMessage("Succefully Updated");
      } else {
        console.error(info.error);
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
            id="userPasswordUpdate"
            onSubmit={userPasswordUpdate}
          >
            {/* Old and New Password */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label
                    className="col-sm-3 col-form-label"
                    htmlFor="oldPassword"
                  >
                    Old Password
                  </label>
                  <div className="col-sm-9">
                    <div
                      className="form-group"
                      style={{ display: "flex", borderRight: "none" }}
                    >
                      <input
                        type={isOldPasswordShow ? "text" : "password"}
                        className="form-control password-right-border"
                        placeholder="Enter your Old Password"
                        name="oldPassword"
                        id="oldPassword"
                        onChange={handleOnChange}
                        value={userInfo.oldPassword || ""}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required
                      />

                      <span onClick={handleOldPasswordShow}>
                        {isOldPasswordShow ? (
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
              </div>
              <div className="col-md-6">
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
              </div>
            </div>

            <div className="row m-0">
              <div className="profile-button-align">
                <button type="submit" className="btn btn-success" name="save">
                  {isLoading ? "Saving" : "Change"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
