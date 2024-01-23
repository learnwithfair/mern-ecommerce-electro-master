import React, { useContext } from "react";
import { UseContext } from "../../../../../../../../../../use-context/UseContext";

export default function DetailsTab() {
  const { product } = useContext(UseContext);
  return (
    <>
      {/* <!-- tab2  --> */}
      <div id="tab2" className="tab-pane fade in">
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: "center" }}>{product.productDescpt}</p>
          </div>
        </div>
      </div>
      {/* <!-- /tab2  --> */}
    </>
  );
}
