import React from "react";
import useFetch from "../../../../helper/use-fetch/useFetch";

export default function AccountControl() {
  const userLogout = async (e) => {
    e.preventDefault();
    const info = JSON.parse(await useFetch("api/auth/logout", {}, "get"));
    if (info.data) {
      alert("Succefully Logout");
      console.log(info.data);
      // Move to Home Page
      // successMessage("Succefully Logout");
    } else {
      console.error(info.error);
    }
    // warningMessage(info.error);
  };
  const deleteAccount = async (e) => {
    e.preventDefault();

    const info = JSON.parse(
      await useFetch("api/auth/delete-user-account", {}, "delete")
    );
    if (info.data) {
      // Move to Home Page
      alert("Succefully Deleted");
      // Redirect to Home page

      // successMessage("Succefully Logout");
    } else {
      console.error(info);
    }
    // console.log("first");
    // warningMessage(info.error);
  };
  return (
    <>
      <div className="row" style={{ padding: "30px 0px" }}>
        <div className="col-md-6">
          <h3>ACCOUNT CONTROL</h3>
        </div>
        <div className="col-md-6 card profile-button-align">
          {/* <form action="" method="post" className="form-group"> */}
          <input
            type="button"
            className="btn btn-danger m-3"
            style={{ marginRight: "20px" }}
            onClick={deleteAccount}
            value={"Delete Account"}
          />

          <button className="btn btn-warning m-3" onClick={userLogout}>
            Logout
          </button>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}
