import React from "react";
import DescriptionTab from "./components/description-tab/DescriptionTab";
import DetailsTab from "./components/details-tab/DetailsTab";
import ReviewTab from "./components/review-tab/ReviewTab";

export default function ProductContent() {
  return (
    <>
      {/* <!-- product tab content --> */}
      <div className="tab-content">
        {/* <!-- Description tab  --> */}
        <DescriptionTab />

        {/* <!-- Details tab  --> */}
        <DetailsTab />

        {/* <!-- Review tab --> */}
        <ReviewTab />
      </div>
      {/* <!-- /product tab content  --> */}
    </>
  );
}
