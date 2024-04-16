import React, { useContext } from "react";
import Rating from "./components/rating/Rating";
import Review from "./components/review/Review";
import ReviewForm from "./components/review-form/ReviewForm";
import { UseContext } from "../../../../../../../../../../../helper/use-context/UseContext";
import useFetchState from "../../../../../../../../../../../helper/use-fetch/useFetchState";

export default function ReviewTab() {
  const { product } = useContext(UseContext);
  const { data, isLoading, error } = useFetchState(
    "api/review/show-by-prdct-id/" + product._id
  );
  const review = data != null && data.payload.reviews;

  return (
    data != null && (
      <>
        {/* <!-- tab3  --> */}
        <div id="tab3" className="tab-pane fade in">
          <div className="row">
            {/* <!-- Rating --> */}
            <Rating data={review} />

            {/* <!-- Reviews --> */}
            <Review data={review} />

            {/* <!-- Review Form --> */}
            <ReviewForm />
          </div>
        </div>
        {/* <!-- /tab3  --> */}
      </>
    )
  );
}
