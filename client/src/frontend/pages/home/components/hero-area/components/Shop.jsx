import React from "react";

export default function Shop(props) {
  const { name, link, image } = props;
  return (
    <>
      <div className="col-md-4 col-xs-6">
        <div className="shop">
          <div className="shop-img">
            <img src={image} alt=""></img>
          </div>
          <div className="shop-body">
            <h3>
              {name}
              <br></br>Collection
            </h3>
            <a href={link} className="cta-btn">
              Shop now <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
