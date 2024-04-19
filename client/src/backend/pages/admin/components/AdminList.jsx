import React from "react";
import { NavLink } from "react-router-dom";
import useFetchState from "../../../../helper/use-fetch/useFetchState";
import Preloader from "../../../../preloader/Preloader";
import CLIENT_URL from "../../../../config/Config";

export default function AdminList() {
  const { data, isLoading, error } = useFetchState("api/admin/users/show-all");

  const info = data != null ? data.payload.users : null;

  return info == null ? (
    error
  ) : isLoading ? (
    <Preloader />
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
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>S/L</th>
                        <th> Image </th>
                        <th> Name </th>
                        <th> Email / Phone </th>

                        <th> Adress </th>
                        <th> Joining </th>
                        <th> Admin </th>

                        <th> Band </th>
                      </tr>
                    </thead>
                    <tbody>
                      {info.map((user, i) => (
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
                          <td></td>
                          {/* <td> {user.createdAt} </td> */}
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked={user.isAdmin && true}
                              />
                              <span className="slider round"></span>
                            </label>
                            {/* <input type="checkbox" name="" id="" /> */}
                          </td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked={user.isBanned && true}
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
