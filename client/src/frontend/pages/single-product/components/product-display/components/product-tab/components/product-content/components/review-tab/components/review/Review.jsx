import React from "react";
import RatingStars from "../../../../../../../../../../../../components/rating-stars/RatingStars";

export default function Review(props) {
  const review = props.data;
  return (
    <>
      {/* <!-- Reviews --> */}
      <div className="col-md-6">
        <div id="reviews">
          <ul className="reviews">
            {review.map((rev, i) => (
              <li key={i}>
                <div className="review-heading">
                  <h5 className="name">{rev.name}</h5>
                  <p className="date">{rev.createdAt.$date}</p>
                  {/* 27 DEC 2018, 8:0 PM  */}
                  <div className="review-rating">
                    <RatingStars star={rev.rating} />
                  </div>
                </div>
                <div className="review-body">
                  <p style={{ textAlign: "justify" }}>{rev.review}</p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="reviews-pagination">
            <li className="active">1</li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- /Reviews --> */}
    </>
  );
}
