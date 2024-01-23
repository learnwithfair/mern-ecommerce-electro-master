import React, { useRef } from "react";


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
          <h3 className="page-title"> Form elements </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Forms</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Form elements
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Two column</h4>
                <form className="form-sample">
                  <p className="card-description"> Personal info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          First Name
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Last Name
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
                        <label className="col-sm-3 col-form-label">
                          Gender
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Date of Birth
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            placeholder="dd/mm/yyyy"
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
                          <select className="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Membership
                        </label>
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="membershipRadios"
                                id="membershipRadios1"
                                value=""
                                defaultChecked
                              />{" "}
                              Free{" "}
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="membershipRadios"
                                id="membershipRadios2"
                                value="option2"
                              />{" "}
                              Professional{" "}
                            </label>
                          </div>
                        </div>
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
