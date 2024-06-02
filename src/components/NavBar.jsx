import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <a className="btn btn-primary" href="#signup">
            Sign Up
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
