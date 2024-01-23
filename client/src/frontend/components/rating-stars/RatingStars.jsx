import React from "react";

export default function RatingStars(props) {
  const ratingStar = [];
  for (let j = 0; j < 5; j++) {
    if (j < props.star) {
      ratingStar[j] = <i key={j} className="fa fa-star"></i>;
    } else {
      ratingStar[j] = <i key={j} className="fa fa-star-o"></i>;
    }
  }
  return ratingStar;
}
