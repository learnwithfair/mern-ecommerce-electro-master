import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterColumn(props) {
  return (
    <>
      <div className="col-md-3 col-xs-6">
        <div className="footer">
          <h3 className="footer-title">{props.title}</h3>
          <ul className="footer-links">
            {props.data.map((item, i) => (
              <li key={i}>
                <NavLink exact="true" to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
