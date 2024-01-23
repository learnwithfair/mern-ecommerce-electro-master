import React from "react";

export default function ReviewForm() {
  return (
    <>
      {/* <!-- Review Form --> */}
      <div className="col-md-3">
        <div id="review-form">
          <form
            className="review-form"
            id="review-submit-form"
            action=""
            method="post"
          >
            <input
              className="input"
              type="text"
              id="review-name"
              placeholder="Your Name"
            />
            <input
              className="input"
              id="review-email"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="input"
              id="review"
              placeholder="Your Review"
            ></textarea>
            <div className="input-rating">
              <span>Your Rating: </span>
              <div className="stars">
                <input id="star5" name="rating" value="5" type="radio" />
                <label htmlFor="star5"></label>
                <input
                  id="star4"
                  name="rating"
                  value="4"
                  type="radio"
                  defaultChecked
                />
                <label htmlFor="star4"></label>
                <input id="star3" name="rating" value="3" type="radio" />
                <label htmlFor="star3"></label>
                <input id="star2" name="rating" value="2" type="radio" />
                <label htmlFor="star2"></label>
                <input id="star1" name="rating" value="1" type="radio" />
                <label htmlFor="star1"></label>
              </div>
            </div>
            <button className="primary-btn">Submit</button>
          </form>
        </div>
      </div>
      {/* <!-- /Review Form --> */}
    </>
  );
}
