import React from "react";
import { NavLink } from "react-router-dom";

export default function BreadCrumb(props) {
  const breadCrumbTree = props.data.map((item, i) => (
    <li key={i}>
      <NavLink exact="true" to={item.link}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      {/* <!-- BREADCRUMB --> */}
      <div id="breadcrumb" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                {breadCrumbTree}
                <li className="active">{props.activeName}</li>
              </ul>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /BREADCRUMB --> */}
    </>
  );
}
