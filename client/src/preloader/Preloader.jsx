import React from 'react'
import preloaderImage from "./assets/icon/preloader.gif"



export default function Preloader() {
  return (
    <>
      {/* <!-- Preloader CSS  --> */}
      {/* <link rel="stylesheet" href="./assets/css/preloader.css" /> */}

      {/* <!-- Preloader Section Start --> */}
      <div class="preloader-busy" align="middle" id="preloader-busy">
        <div class="preloader-center">
          <img src={preloaderImage} alt="" />
        </div>
      </div>
      {/* <!-- Preloader Section  End--> */}
      {/* <!-- Preloader JS  --> */}
      {/* <script src="./assets/js/prealoader.js"></script> */}
    </>
  );
}
