import React from "react";
import { useContext } from "react";
import { UseContext } from "../../../../../../../../use-context/UseContext";

export default function ProductNav() {
  const { review } = useContext(UseContext);
  return (
    <>
      {/* <!-- product tab nav --> */}
      <ul className="tab-nav">
        <li className="active">
          <a data-toggle="tab" href="#tab1">
            Description
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#tab2">
            Details
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#tab3">
            Reviews ({review.length})
          </a>
        </li>
      </ul>
      {/* <!-- /product tab nav --> */}
    </>
  );
}
