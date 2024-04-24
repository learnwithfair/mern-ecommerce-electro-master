import React, { useRef, useState } from "react";

import "../assets/style.css";
import "../assets/ijaboCropTool.min.css";
import "../assets/ijaboCropTool.min.js";
// import "../assets/profile.js";
import CLIENT_URL from "../../../../config/Config.jsx";
import useFetch from "../../../../helper/use-fetch/useFetch.jsx";

export default function ProfileImage(props) {
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState(null);

  // Image handle
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file.type.split("/")[0] !== "image") {
      warningMessage("Uploded Image is Not a Image");
    } else {
      setImage(file);
      const formData = new FormData();
      formData.append("image", file);

      const info = JSON.parse(
        await useFetch("api/auth/update-profile-image", formData, "put")
      );

      // Set State value after click submit button
      if (info.data != null) {
        successMessage("Succefully Uploaded");
      } else {
        errorMessage(info.error);
        setImage(null);
      }
    }
  };

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
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
                src={
                  image
                    ? URL.createObjectURL(image)
                    : CLIENT_URL +
                      "images/users/" +
                      (props.image == "default-image"
                        ? "default-user-image.png"
                        : props.image)
                }
                alt={props.image}
              />

              <input
                type="file"
                className="choose-file"
                name="admin_image"
                id="admin_image"
                accept="image/png, image/jpg, image/jpeg"
                ref={hiddenFileInput}
                onChange={handleImageChange}
              />
              <img
                className="camera-icon"
                src="/icon/camera.jpg"
                id="change_picture_btn"
                alt=""
                onClick={handleClick}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
