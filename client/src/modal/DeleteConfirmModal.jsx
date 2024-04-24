import React from "react";
import $ from "jquery";

export default function DeleteConfirmModal() {
  $(document).ready(function () {
    $(document).on("click", ".deletebtn", function (e) {
      e.preventDefault();
      let id = $(this).data("id");
      let type = $(this).data("type");
      $("#delete_id").val(id);
      $("#delete_type").val(type);
    });
  });
  return (
    <>
      <div
        className="modal fade bd-example-modal-sm"
        id="deletemodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm modal-dialog-centered"
          role="document"
        >
          <div className="modal-content modal_icon">
            <form action="" method="post" id="delete_modal_clear">
              <div className="modal-title" id="exampleModalLongTitle">
                <input type="hidden" name="delete_id" id="delete_id" />
                <input type="hidden" name="delete_type" id="delete_type" />
                <div align="middle">
                  <img src="/icon/delete-icon.png" alt="" />
                </div>
                <br />
                <h5>Do you want to Delete?</h5>
                <div></div>
                <div>You won't be able to recover it!!</div>
                <br />
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  style={{ margin: "0px 10px" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-danger delete_data"
                  data-dismiss="modal"
                  style={{ margin: "0px 10px" }}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
