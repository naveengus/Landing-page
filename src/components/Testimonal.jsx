import React from "react";

function Testimonal({ props }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img
            className="img-fluid rounded-circle mb-3"
            src={`${props.testImg}`}
            alt="..."
          />
          <h5>{props.testHead}</h5>
          <p className="font-weight-light mb-0">{props.testPara}</p>
        </div>
      </div>
    </>
  );
}

export default Testimonal;
