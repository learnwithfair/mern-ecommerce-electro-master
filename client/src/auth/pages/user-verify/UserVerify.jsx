import React from "react";
import DynamicTitle from "../../../backend/components/DynamicTitle";
import useFetchState from "../../../helper/use-fetch/useFetchState";

export default function UserVerify() {
  const token = new URLSearchParams(window.location.search).get("token");

  const { data, isLoading, error } = useFetchState(
    "api/users/verify/" + (token ? token : "")
  );
  // const result = "";

  console.log(data);
  console.log(error);

  return (
    <>
      <DynamicTitle title={"User-Verify"} />
      <div className="container-scroller auth login-bg">
        <div className="container-fluid page-body-wrapper full-page-wrapper p-0">
          <div className="row w-100 m-0">
            <div className="full-page-wrapper d-flex align-items-center">
              <div className="col-md-6 grid-margin stretch-card mx-auto">
                <div className="card">
                  <div className="card-body">
                    {data != null
                      ? data.message
                      : error != null
                      ? error.message
                      : error}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- row ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </>
  );
}
