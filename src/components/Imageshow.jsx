import React from "react";
import App from "../App";
// import image from "assert/img/bg-Showcases-1.jpg";

function Imageshow({ props }) {
  return (
    <>
      <div className="row g-0">
        <div
          className={`col-lg-6 ${props.side} text-white showcase-img`}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="col-lg-6 my-auto showcase-text">
          <h2>{props.imgHeading}</h2>
          <p className="lead mb-0">{props.imgPara}</p>
        </div>
      </div>
    </>
  );
}

export default Imageshow;
