import React from "react";
import { useContext } from "react";
import { UseContext } from "../../../../../../../../../helper/use-context/UseContext";
import useFetchState from "../../../../../../../../../helper/use-fetch/useFetchState";

export default function ProductNav() {
  const { product } = useContext(UseContext);
  const { data, isLoading, error } = useFetchState(
    "api/review/show-by-prdct-id/" + product._id
  );
  const review = data != null && data.payload.reviews;

  return (
    data != null && (
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
    )
  );
}
