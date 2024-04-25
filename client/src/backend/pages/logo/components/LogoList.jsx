import React, { useState } from "react";
import $ from "jquery";
import useFetch from "../../../../helper/use-fetch/useFetch";
import CLIENT_URL from "../../../../config/Config";
// import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

export default function LogoList(props) { 
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [logos, setLogos] = useState(props.logos);

  // handle is Active
  const handleIsActive = async (e, id, isActive) => {
    const info = JSON.parse(
      await useFetch(
        "api/admin/update-logo-activation/" + id,
        { isActive: !isActive },
        "put"
      )
    );

    if (info.data != null) {
      setLogos(null);
      setTimeout(() => setLogos(info.data.payload.logos), 1);
      successMessage("Successfully Updated");
    } else {
      errorMessage();
    }
  };

  // Delete logo by ID
  const handleDelete = (e, id) => {
    e.preventDefault();
    setShow(true);
    setDeleteId(id);
   
  };

  // Delete Logo After Confirmation
  const deleteItemById = async () => {
    setShow(false);

    const info = JSON.parse(
      await useFetch("api/admin/delete-logo/" + deleteId, {}, "delete")
    );

    // Set State value after click submit button
    if (info.data != null) {
      setLogos(info.data.payload.logos);
      successMessage("Successfully Deleted");
    } else {
      errorMessage(info.error);
    }
  };

  // initialize datatable // Another files initialize in the main.jsx file
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });

  return (
    <>
      {/* Delete Modal  */}
      <Modal
        size="sm"
        show={show}
        centered
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>
          <div className="justify-content-center" align="middle">
            <div>
              <img
                src="/icon/delete-icon.png"
                alt=""
                className="rounded-circle border border-danger p-1"
                width="100px"
                height="100px"
              />
            </div>
            <br />
            <h4>Do you want to Delete?</h4>
            <div className="fs-6">You won't be able to recover it!!</div>
          </div>
          <hr />
          <div align="middle">
            <button
              className="btn btn-secondary m-2"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            <button className="btn btn-danger m-2" onClick={deleteItemById}>
              Delete
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {/* /Delete Modal  */}
      <div className="card-body">
        <h4 className="card-title">Logo List</h4>
        <div className="table-responsive">
          <table
            className="table table-hover"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th scope="col">S/L</th>
                <th scope="col"> Logo </th>
                <th scope="col"> Position </th>
                <th scope="col"> Active </th>
                <th scope="col"> Action </th>
              </tr>
            </thead>
            <tbody>
              {logos &&
                logos.map((logo, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={CLIENT_URL + "images/logos/" + logo.logo}
                        className="rounded-circle border border-info justify-content-center p-1"
                        alt={logo.logo}
                        style={{ height: "100px", width: "100px" }}
                      />
                    </td>
                    <td> {logo.location} </td>

                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          name="isActive"
                          defaultChecked={logo.isActive && true}
                          onClick={(event) =>
                            handleIsActive(event, logo._id, logo.isActive)
                          }
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <i
                        className="fa fa-trash text-danger"
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        onClick={(event) => handleDelete(event, logo._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
