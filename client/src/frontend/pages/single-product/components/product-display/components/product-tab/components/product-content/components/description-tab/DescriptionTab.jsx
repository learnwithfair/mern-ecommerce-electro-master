import React, { useContext } from "react";
import { UseContext } from "../../../../../../../../../../use-context/UseContext";

export default function DescriptionTab() {
  const { product } = useContext(UseContext);
  return (
    <>
      {/* <!-- tab1  --> */}
      <div id="tab1" className="tab-pane fade in active">
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: "center" }}>{product.productDescpt}</p>
          </div>
        </div>
      </div>
      {/* <!-- /tab1  --> */}
    </>
  );
}
