import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DropFileInput from "../../../../../components/drop-file-input/DropFileInput";

export default function Post() {
  const [isAccessMoreImage, setIsAccessMore] = useState(false);
  const [images, setImages] = useState([]);
  const hiddenFileInput = useRef(null);

  // when the Button component is clicked
  const fileUploadBrowse = (event) => {
    hiddenFileInput.current.click();
  };

  // to handle the user-selected file
  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("file-upload-info").value = fileUploaded.name;
  };

// Show more upload image section
  const accessMoreImage = () => {
    setIsAccessMore(!isAccessMoreImage);
  };
  // For set Preview Image  
  const onFileChange = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImage) => [
          ...prevImage,
          { name: files[i].name, url: URL.createObjectURL(files[i]) },
        ]);
      }
    }
  };
  // Delete Preview Image
  const deletePrevImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
                          <textarea
                            name="productName"
                            rows="3"
                            placeholder="Write Product Name Here.."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Description
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            name="productDescription"
                            rows="3"
                            placeholder="Write Product Description Here.."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Price</label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            min={0}
                            name="productPrice"
                            className="form-control"
                            placeholder="Enter Product Price"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Discount
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <input
                              type="number"
                              min={0}
                              name="productDiscount"
                              className="form-control"
                              placeholder="Enter Product Discount"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text"
                                style={{ padding: "11px" }}
                              >
                                %
                              </span>
                            </div>
                          </div>
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
                            id="catId"
                            name="catId"
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
                            id="brandId"
                            name="brandId"
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
                        <label className="col-sm-3 col-form-label">Size</label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-multiple"
                            multiple="multiple"
                            name="productSize"
                            style={{ width: "100%" }}
                          >
                            <option value="AL">XXL</option>
                            <option value="WY">XL</option>
                            <option value="AM">L</option>
                            <option value="CA">M</option>
                            <option value="RU">Russia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Color</label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-multiple"
                            multiple="multiple"
                            name="productColor"
                            style={{ width: "100%" }}
                          >
                            <option value="AL">Red</option>
                            <option value="WY">Black</option>
                            <option value="AM">America</option>
                            <option value="CA">Canada</option>
                            <option value="RU">Russia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Rating
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            min={0}
                            name="productRating"
                            className="form-control"
                            placeholder="Enter Product Price"
                          />
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
                            name="productImage[]"
                            className="file-upload-default"
                            onChange={handleFileChange}
                            ref={hiddenFileInput}
                            accept=".png, .jpg, .jpeg"
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
                                className="file-upload-browse btn btn-success "
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
                  <div className="form-group">
                    <div className="form-check form-check-success">
                      <label className="form-check-label">
                        Add More Image?
                        <input
                          type="checkbox"
                          className="form-check-input cursor-pointer"
                          onClick={accessMoreImage}
                        />
                      </label>
                    </div>
                  </div>

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
                  {isAccessMoreImage && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label mt-sm-5">
                            Upload Image
                          </label>
                          <div className="col-sm-9">
                            <DropFileInput
                              onFileChange={(files) => onFileChange(files)}
                            />
                          </div>
                        </div>
                      </div>
                      {images.length > 0 && (
                        <div className="col-md-6">
                          <div className="row">
                            <div className="image-container">
                              {images.map((item, index) => (
                                <div key={index} className="image">
                                  <img
                                    key={index}
                                    src={item.url}
                                    alt={item.name}
                                  />
                                  <span onClick={() => deletePrevImage(index)}>
                                    <i className="mdi mdi-close"></i>
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

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
