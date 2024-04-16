import React from "react";

import "../assets/style.css";
import "../assets/ijaboCropTool.min.css";
import "../assets/ijaboCropTool.min.js";
import "../assets/profile.js";
import CLIENT_URL from "../../../../config/Config.jsx";

// import path from "../../../../../../server/public/images/users";
export default function ProfileImage(props) {
  return (
    <>
      <div className="row" style={{ padding: "30px 0px" }}>
        <div className="col-md-6">
          <h3>PROFILE PHOTO</h3>
        </div>
        <div className="col-md-6 card">
          <form action="" method="post" className="">
            <div align="middle">
              <img
                className="profile-img rounded-circle admin_picture"
                // src={path + props.image}
                src={CLIENT_URL+"images/users/default.jpg"}
                alt=""
              />

              <input
                type="file"
                className="choose-file"
                name="admin_image"
                id="admin_image"
                accept="image/png, image/jpg, image/jpeg"
              />
              <img
                className="camera-icon"
                src="/icon/camera.jpg"
                id="change_picture_btn"
                alt=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
