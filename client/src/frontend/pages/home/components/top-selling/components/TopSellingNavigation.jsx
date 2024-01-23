import React from "react";
import navigationData from "../data/NavigationData.json";

export default function TopSellingNavigation() {
  const topSellingNavigation = navigationData.map((nav, index) => (
    <li key={index} className={index === 0 ? "active" : ""}>
      <a data-toggle="tab" href={nav.menuLink}>
        {nav.menuName}
      </a>
    </li>
  ));
  return (
    <>
      <div className="section-nav">
        <ul className="section-tab-nav tab-nav">{topSellingNavigation}</ul>
      </div>
    </>
  );
}
