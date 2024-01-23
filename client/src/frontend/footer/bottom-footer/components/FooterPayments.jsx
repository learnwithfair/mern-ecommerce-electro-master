import React from "react";

export default function FooterPayments(props) {
  return (
    <>
      {props.data.map((item, i) => (
        <li key={i}>
          <a href={item.link}>
            <i className={item.icon}></i>
          </a>
        </li>
      ))}
    </>
  );
}
