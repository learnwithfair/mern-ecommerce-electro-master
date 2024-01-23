import React from "react";
import socialLinkData from "./data/SocialLinkData.json";

export default function SocialLink() {
  return (
    <>
      <ul className="newsletter-follow">
        {socialLinkData.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
