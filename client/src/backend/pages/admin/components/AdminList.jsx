import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useFetchState from "../../../../helper/use-fetch/useFetchState";
import CLIENT_URL from "../../../../config/Config";
import useFetch from "../../../../helper/use-fetch/useFetch";
import $ from "jquery";

export default function AdminList() {
  const { data, isLoading, error } = useFetchState("api/admin/users/show-all");
  let userList = data != null ? data.payload.users : null;

  // For Date formating
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
  // handle isAdmin and isBanned
  const handleUpdate = async (event, id, data) => {
    const name = event.target.name;
    const value = !data;
    const info = JSON.parse(
      await useFetch("api/admin/users/update/" + id, { [name]: value }, "put")
    );
    if (info.data != null) {
      info.data.success
        ? successMessage("Successfully Updated")
        : errorMessage();
    }
    // Set State value after click submit button
    // userList = info.data != null ? info.data.payload.users : null;
  };

  // initialize datatable // Another files initialize in the main.jsx file
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });

  return userList == null ? (
    error
  ) : (
    <>
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Admins / Users</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink exact="true" to="/api/admin/admin-list">
                  Admin
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User
              </li>
            </ol>
          </nav>
        </div>
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Admins & Users List</h4>
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
                        <th scope="col"> Image </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Email / Phone </th>

                        <th scope="col"> Adress </th>
                        <th scope="col"> Joining </th>
                        <th scope="col"> Admin </th>

                        <th scope="col"> Banned </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map((user, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>
                            <img
                              src={
                                CLIENT_URL +
                                "images/users/" +
                                (user.image == "default-image"
                                  ? "default-user-image.png"
                                  : user.image)
                              }
                              alt={user.image}
                            />
                          </td>
                          <td> {user.name} </td>
                          <td>
                            <li>
                              <b>Email: </b>
                              <NavLink exact="true" to={"mailto:" + user.email}>
                                {user.email}
                              </NavLink>
                            </li>
                            <br />
                            <li>
                              <b>Phone: </b>
                              <NavLink exact="true" to={"tel+:" + user.phone}>
                                {user.phone}
                              </NavLink>
                            </li>
                          </td>
                          <td> {user.address} </td>
                          {/* <td></td> */}
                          <td>
                            {" "}
                            {formatter.format(new Date(user.createdAt))}{" "}
                          </td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="isAdmin"
                                defaultChecked={user.isAdmin && true}
                                onClick={(event) =>
                                  handleUpdate(event, user._id, user.isAdmin)
                                }
                              />
                              <span className="slider round"></span>
                            </label>
                            {/* <input type="checkbox" name="" id="" /> */}
                          </td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="isBanned"
                                defaultChecked={user.isBanned && true}
                                onClick={(event) =>
                                  handleUpdate(event, user._id, user.isBanned)
                                }
                              />
                              <span className="slider round"></span>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
