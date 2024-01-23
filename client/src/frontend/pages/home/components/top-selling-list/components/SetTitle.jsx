import React from "react";

export default function SetTitle(props) {
  const { title, id } = props;
  return (
    <>
      <div className="section-title">
        <h4 className="title">{title}</h4>
        <div className="section-nav">
          <div id={id} className="products-slick-nav"></div>
        </div>
      </div>
    </>
  );
}
