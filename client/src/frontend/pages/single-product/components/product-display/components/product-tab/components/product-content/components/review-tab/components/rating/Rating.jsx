import React from "react";
import RatingStars from "../../../../../../../../../../../../components/rating-stars/RatingStars";

export default function Rating(props) {
  const review = props.data;
  let totalStar = 0;

  const totalReview = review.length;
  const starCount = [];

  for (let star = 1; star <= 5; star++) {
    let data = review.filter((rev, i) => rev.rating === star).length;
    starCount[star - 1] = data;
    totalStar = totalStar + data * star;
  }

  const rating = [];
  for (let i = 4; i >= 0; i--) {
    rating[4 - i] = (
      <li key={i}>
        <div className="rating-stars">
          <RatingStars star={i + 1} />
        </div>
        <div className="rating-progress">
          <div
            style={{
              width: ((starCount[i] * 100) / totalReview + "%").toString(),
            }}
          ></div>
        </div>
        <span className="sum">{starCount[i]}</span>
      </li>
    );
  }

  return (
    <>
      {/* <!-- Rating --> */}
      <div className="col-md-3">
        <div id="rating">
          <div className="rating-avg">
            <span>{totalStar / 5}</span>
            <div className="rating-stars">
              <RatingStars star={5} />
            </div>
          </div>
          <ul className="rating">{rating}</ul>
        </div>
      </div>
      {/* <!-- /Rating --> */}
    </>
  );
}
