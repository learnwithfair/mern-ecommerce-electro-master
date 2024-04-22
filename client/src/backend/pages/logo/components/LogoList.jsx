import React from "react";
import $ from "jquery";

export default function LogoList(props) {
  // handle is Adtive
  const handleIsActive = async (id) => {
    // const name = event.target.name;
    // const value = !data;
    // const info = JSON.parse(
    //   await useFetch("api/admin/users/update/" + id, { [name]: value }, "put")
    // );
    // if (info.data != null) {
    //   info.data.success
    //     ? successMessage("Successfully Updated")
    //     : errorMessage();
    // }
    // Set State value after click submit button
    // userList = info.data != null ? info.data.payload.users : null;
  };

  // Delete logo by ID
  const deleteLogoById = () => {};
  // initialize datatable // Another files initialize in the main.jsx file
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });

  return (
    <>
      <h4 className="card-title">Logo List</h4>
      <div className="table-responsive">
        <table
          className="table table-hover"
          id="dataTable"
          width="100%"
          cellspacing="0"
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
            {props.logos.map((logo, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={CLIENT_URL + "images/logos/" + logo.logo}
                    alt={logo.logo}
                  />
                </td>
                <td> {logo.location} </td>

                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="isActive"
                      defaultChecked={logo.isActive && true}
                      onClick={handleIsActive.bind(this, logo._id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <i
                    className="mdi mdi-trash text-danger"
                    onClick={deleteLogoById.bind(logo._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
