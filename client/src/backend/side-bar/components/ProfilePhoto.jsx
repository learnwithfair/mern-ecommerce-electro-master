import React, { useContext } from "react";
import { UseContext } from "../../../helper/use-context/UseContext";
import CLIENT_URL from "../../../config/Config";

export default function ProfilePhoto() {
  const { user } = useContext(UseContext);
  return (
    <>
      <li className="nav-item profile">
        <div className="profile-desc">
          <div className="profile-pic">
            <div className="count-indicator">
              <img
                className="img-xs rounded-circle "
                src={
                  CLIENT_URL +
                  "images/users/" +
                  (user.image == "default-image"
                    ? "default-user-image.png"
                    : user.image)
                }
                alt={user.name}
              ></img>
              <span className="count bg-success"></span>
            </div>
            <div className="profile-name">
              <h5 className="mb-0 font-weight-normal">{user.name}</h5>
              <span>Admin</span>
            </div>
          </div>
          <a href="#" id="profile-dropdown" data-bs-toggle="dropdown">
            <i className="mdi mdi-dots-vertical"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
            aria-labelledby="profile-dropdown"
          >
            <a
              href="/profile"
              target="_blank"
              className="dropdown-item preview-item"
            >
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-settings text-primary"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">
                  Account settings
                </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a
              href="/profile"
              target="_blank"
              className="dropdown-item preview-item"
            >
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-onepassword  text-info"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">
                  Change Password
                </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
          </div>
        </div>
      </li>
    </>
  );
}
