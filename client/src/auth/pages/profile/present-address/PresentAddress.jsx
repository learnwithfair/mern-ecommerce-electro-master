import React, { useState } from "react";
import "../assets/profile.css";
import useFetch from "../../../../helper/use-fetch/useFetch";

export default function PresentAddress(props) {
  const [userInfo, setUserInfo] = useState(props.info);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
  };

  // Update Profile Contact Info
  const userContactInfoUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (userInfo.phone && userInfo.address) {
      const info = JSON.parse(
        await useFetch("api/auth/update-profile-contact-info", userInfo, "put")
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
            id="userUpdate"
            onSubmit={userContactInfoUpdate}
          >
            {/* Phone Number & Address */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Phone</label>
                  <div className="col-sm-9">
                    <input
                      type="tel"
                      onChange={handleOnChange}
                      name="phone"
                      value={userInfo.phone || "+8801"}
                      className="form-control"
                      pattern="[+8801]{5}[0-9]{9}"
                      title="+8801000000000"
                      placeholder="Your Mobile Number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Address</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={handleOnChange}
                      name="address"
                      value={userInfo.address || ""}
                      placeholder="Your address"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Gender */}
            {/* <div className="row">
              <div className="col-md-6 mt-md-3">
                <div className="form-group row">
                  <label className="col-3 col-form-label">Active</label>
                  <div className="col-9" style={{ marginTop: "-8px" }}>
                    <div className="row ms-1">
                      <div className="col-6 form-check form-check-success">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="membershipRadios"
                            id="membershipRadios1"
                            value=""
                          />
                          Yes
                        </label>
                      </div>
                      <div className="col-6 form-check form-check-warning">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="membershipRadios"
                            id="membershipRadios2"
                            value="option2"
                            defaultChecked
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
