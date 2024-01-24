import React, { useRef } from "react";
import { NavLink } from "react-router-dom";


export default function Post() {
  const hiddenFileInput = useRef(null);

  // when the Button component is clicked
  const fileUploadBrowse = (event) => {
    hiddenFileInput.current.click();
  };

  // to handle the user-selected file

  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("file-upload-info").value=fileUploaded.name; 
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Products</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink exact="true" to="/api/admin/manage-products">
                  Products
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Post
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Post Product</h4>
                <form
                  action=""
                  method="POST"
                  id="post-product"
                  className="form-sample"
                  enctype="multipart/form-data"
                >
                  <p className="card-description"> Product info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="product-name"
                            id="product-name"
                            className="form-control"
                            placeholder="Enter Product Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Price</label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            min={0}
                            className="form-control"
                            placeholder="Enter Product Price"
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
                          <select
                            id="product-category"
                            name="product-category"
                            className="form-control"
                          >
                            <option>Select Category</option>
                            <option>Laptop</option>
                            <option>Android</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Brand</label>
                        <div className="col-sm-9">
                          <select
                            id="product-brand"
                            name="product-brand"
                            className="form-control"
                          >
                            <option>Select Brand</option>
                            <option>HP</option>
                            <option>Samsung</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Description
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            name="product-description"
                            id="product-description"
                            rows="4"
                            placeholder="Write Product Description Here.."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-md-3">
                      <div className="form-group row">
                        <label className="col-3 col-form-label">Active</label>
                        <div
                          className="col-9"
                          style={{ marginTop: "-8px" }}
                        >
                          <div className="row ms-1">
                            <div className="col-6 form-check">
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
                            <div className="col-6 form-check">
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
                        {/* <div className="col-sm-4" style={{ marginTop: "-8px" }}>
                          
                        </div> */}
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
                        <label className="col-sm-3 col-form-label">State</label>
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
                        <label className="col-sm-3 col-form-label">City</label>
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
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Multiple slt-2
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-multiple"
                            multiple="multiple"
                            style={{ width: "100%" }}
                          >
                            <option value="AL">Alabama</option>
                            <option value="WY">Wyoming</option>
                            <option value="AM">America</option>
                            <option value="CA">Canada</option>
                            <option value="RU">Russia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          File upload
                        </label>

                        <div className="col-sm-9">
                          <input
                            type="file"
                            name="img[]"
                            className="file-upload-default"
                            onChange={handleFileChange}
                            ref={hiddenFileInput}
                          />
                          <div className="input-group col-xs-12">
                            <input
                              id="file-upload-info"
                              type="text"
                              className="form-control file-upload-info"
                              disabled
                              placeholder="Upload Image"
                            />
                            <span className="input-group-append">
                              <button
                                className="file-upload-browse btn btn-primary "
                                type="button"
                                style={{ padding: "10px" }}
                                onClick={fileUploadBrowse}
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-5">
                    <div className="col d-flex justify-content-center ">
                      <button className="btm btn-primary m-2">Submit</button>
                      <button className="btm btn-danger m-2">Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
