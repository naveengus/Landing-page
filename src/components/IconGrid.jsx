import React from "react";

function IconGrid({ props }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <i className={props.icon}></i>
          </div>
          <h3>{props.heading} </h3>
          <p className="lead mb-0">{props.para}</p>
        </div>
      </div>
    </>
  );
}

export default IconGrid;
