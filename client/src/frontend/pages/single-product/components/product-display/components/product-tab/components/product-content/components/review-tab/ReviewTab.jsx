import React, { useContext } from "react";
import Rating from "./components/rating/Rating";
import Review from "./components/review/Review";
import ReviewForm from "./components/review-form/ReviewForm";
import { UseContext } from "../../../../../../../../../../use-context/UseContext";

export default function ReviewTab() {
  const { review } = useContext(UseContext);
  return (
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
  );
}
