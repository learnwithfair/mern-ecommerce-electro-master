import React, { useState } from "react";
import search_item_data from "./data/search_item_data.json";
import { NavLink } from "react-router-dom";

export default function Search() {

  const [searchItem, setSearchItem] = useState([]);
  const sortedNames = search_item_data.sort();

  const searchHandelar = (e) => {
    let input = e.target;

    //Execute function on keyup

    let r = document.getElementById("searchdisplay");
    if (input.value === "") {
      r.style.display = "none";
    } else {
      r.style.display = "inline-block";
    }

    let data = [];
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
      if (
        i[0].toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
       
        //create li element
        data.push(          
          <>
            <a
              href={i[2]}
              className="dropdown-item preview-item p-2 cursor-pointer"
            >
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <li className={i[1]}></li>
                </div>
              </div>
              <div className="preview-item-content">
                <p className="text-muted ellipsis pt-3 list-items">
                  <span className="text-white">
                    {i[0].substring(0, input.value.length)}
                  </span>
                  {i[0].substring(input.value.length)}
                </p>
              </div>
            </a>
            <div className="dropdown-divider m-0"></div>
          </>
        );
      }
    }
    if (data.length === 0) {
      data.push(
        <>
          <a className="dropdown-item preview-item p-2">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-calendar text-danger"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <p className="text-danger ellipsis pt-3 list-items">
                Whoops!! No Result Found.
              </p>
            </div>
          </a>
          <div className="dropdown-divider m-0"></div>
        </>
      );

      setSearchItem([data]);
    }

    setSearchItem([data]);
  };

  return (
    <>
      <ul className="navbar-nav w-100" style={{ display: "inline-block" }}>
        <li className="nav-item w-100">
          <form
            className="nav-link mt-2 mt-md-0 d-none d-lg-flex search "
            autoComplete="off"
            id="searchrrr"
          >
            <input
              onChange={searchHandelar}
              type="text"
              id="itemSearch"
              className="form-control mt-2"
              placeholder="Search Items"
            />
          </form>
        </li>

        <li
          className="nav-item"
          style={{
            marginTop: "-5px",
            minWidth: "76%",
            display: "none",
          }}
          id="searchdisplay"
        >
          <div
            className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list p-0 nav-link mt-0 d-none d-lg-block listt"
            style={{ display: "block" }}
          >
            {searchItem}
          </div>
        </li>
      </ul>
    </>
  );
}
