import React, { useState, useRef } from "react";
import DropFileInput from "../../../components/drop-file-input/DropFileInput";
import { NavLink } from "react-router-dom";
import LogoList from "./LogoList";

function LogoUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const onFileChange = (files) => {
    if (files[0].type.split("/")[0] !== "image") {
      warningMessage("Uploded Image is Not a Image");
    } else {
      const file = files[0];
      const imgname = files[0].name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(
            img,
            (maxSize - img.width) / 2,
            (maxSize - img.height) / 2
          );
          canvas.toBlob(
            (blob) => {
              const file = new File([blob], imgname, {
                type: "image/png",
                lastModified: Date.now(),
              });

              console.log(file);
              setImage(file);
            },
            "image/jpeg",
            0.8
          );
        };
      };
    }
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  // Delete Preview Image
  const deletePrevImage = () => {
    setImage(null);
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Logos</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink exact="true" to="/api/admin/logo">
                  Logos
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Logo
              </li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Upload Logo</h4>
                <hr />

                <div className="row form-group">
                  {image ? (
                    <>
                      <label className="col-sm-3 mt-sm-5">Logo</label>
                      <div className="col-sm-9">
                        <div className="row">
                          <div align="middle">
                            <img
                              height="100%"
                              width="100%"
                              style={{ maxWidth: "180px", maxWidth: "180px" }}
                              src={URL.createObjectURL(image)}
                              alt="upload image"
                              className="rounded-circle border border-info justify-content-center"
                            />
                          </div>
                          <span
                            onClick={deletePrevImage}
                            className="position-absolute"
                            style={{
                              cursor: "pointer",
                              top: "20%",
                              left: "80%",
                            }}
                          >
                            <i
                              className="mdi mdi-close text-danger font-weight-bold"
                              style={{ fontSize: "24px" }}
                            ></i>
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <label className="col-sm-3 col-xl-3 mt-5 col-form-label d-none d-sm-inline d-md-none d-xl-inline">
                        Logo
                      </label>
                      <div className="col-sm-9 col-md-12 col-xl-9">
                        <DropFileInput
                          onFileChange={(files) => onFileChange(files)}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Position</label>
                  <div className="col-sm-9">
                    <select
                      id="location"
                      name="location"
                      className="form-control"
                      required
                    >
                      <option disabled>Select</option>
                      <option value="F-Header">F-Header</option>
                      <option value="B-Header">B-Header</option>
                      <option value="F-Footer">F-Footer</option>
                      <option value="B-Footer">B-Footer</option>
                      <option value="Mini-Header">Mini-Header</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="row m-0 mt-2">
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-success"
                      name="upload"
                      onClick={handleUploadButtonClick}
                    >
                      {isLoading ? "Uploading" : "Upload"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <LogoList logos={logos} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoUpload;
