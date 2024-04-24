import React, { useState } from "react";
import $, { error } from "jquery";
import useFetch from "../../../../helper/use-fetch/useFetch";
import CLIENT_URL from "../../../../config/Config";

export default function LogoList(props) {
  // const [isLoading, setIsLoading] = useState(false);
  const [logos, setLogos] = useState(props.logos);

  // handle is Adtive
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
  const deleteLogoById = async (e, id) => {
    e.preventDefault();
    const info = JSON.parse(
      await useFetch("api/admin/delete-logo/" + id, {}, "delete")
    );

    // Set State value after click submit button
    if (info.data != null) {
      setLogos(info.data.payload.logos);

      info.data.success
        ? successMessage("Successfully Deleted")
        : errorMessage();
    } else {
      errorMessage();
    }
  };
  // initialize datatable // Another files initialize in the main.jsx file
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });

  return (
    <>
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
                        onClick={(event) => deleteLogoById(event, logo._id)}
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
