import React from "react";

export default function Navbar() {
  return (
    <div className="bgcolor">
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary bg-dark py-3 shadow-sm">
        <div className="conatainer">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Standard Collections
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="expand"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
          </ul>
          <div className="buttons ">
            <a href="" className="btn btn-outline-dark bg-primary ms-2">
              <i className="fa fa-sign-in">Login</i>
            </a>
            <a href="" className="btn btn-outline-dark bg-primary ms-2">
              <i className="fa fa-User-plus">Register</i>
            </a>
            <a href="" className="btn btn-outline-dark bg-primary ms-2">
              <i className="fa fa-shopping me-1">Cart (0)</i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
