import React, { useState, useEffect } from "react";
import DropFileInput from "../../../components/drop-file-input/DropFileInput";
import { NavLink } from "react-router-dom";
import LogoList from "./LogoList";
import useFetch from "../../../../helper/use-fetch/useFetch";
import NoResultFound from "../../../../error-pages/NoResultFound";


function LogoUpload() {
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  // Default location set "F-Header"
  const defaultLocation = { location: "F-Header", logo: "" };
  const [uploadInfo, setUploadInfo] = useState(defaultLocation);
  const [image, setImage] = useState(null);
  const [logos, setLogos] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const info = JSON.parse(
        await useFetch("api/admin/logos/show-all", {}, "get")
      );
      if (info.data != null) {
        setLogos(info.data.payload.logos);
      }
    }, 1);
  }, []);

  // Image handle
  const onFileChange = (files) => {
    if (files[0].type.split("/")[0] !== "image") {
      warningMessage("Uploded Image is Not a Image");
    } else {
      const file = files[0];

      setImage(file);
      setUploadInfo((uploadInfo) => ({
        ...uploadInfo,
        logo: file,
      }));
    }
  };

  // Handle input field Data
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUploadInfo((uploadInfo) => ({ ...uploadInfo, [name]: value }));
  };

  // Handle Upload Logo
  const handleUploadButtonClick = async (e) => {
    setIsLoadingUpload(true);
    if (uploadInfo.location && uploadInfo.logo) {
      // Add info into Form Data class
      const formData = new FormData();
      formData.append("logo", uploadInfo.logo);
      formData.append("location", uploadInfo.location);

      const info = JSON.parse(
        await useFetch("api/admin/upload-logo", formData, "post")
      );

      // Set State value after click submit button
      if (info.data != null) {
        setLogos(null);
        setTimeout(() => setLogos(info.data.payload.logos), 1);
        // Refresh Data
        setUploadInfo(defaultLocation); // Empty Table field
        setImage(null);
        successMessage("Succefully Uploaded");
      } else {
        errorMessage(info.error);
      }
    } else {
      warningMessage("Logo is Required");
    }
    setIsLoadingUpload(false);
  };

  // Delete Preview Image
  const deletePrevImage = () => {
    setImage(null);
    setUploadInfo((uploadInfo) => ({
      ...uploadInfo,
      logo: null,
    }));
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
                              style={{
                                maxWidth: "180px",
                                maxHeight: "180px",
                              }}
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
                      onChange={handleOnChange}
                      required
                    >
                      <option disabled>Select</option>
                      <option value="F-Header" defaultChecked>
                        F-Header
                      </option>
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
                      {isLoadingUpload ? "Uploading" : "Upload"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              {logos ? (
                <LogoList logos={logos} />
              ) : (           
                <NoResultFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoUpload;
