import React from "react";
// import "./navbar.scss"
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark shadow-sm py-3">
        <div className="container ">
          <Link className="navbar-brand fw-bold" to="/">
            QUICK-STORE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span >
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/content">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="" className="btn btn-outline-dark bg-primary me-2">
                <i className="fa fa-sign-in me-1"></i>Login
              </Link>
              <Link to="" className="btn btn-outline-dark bg-primary  me-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </Link>
              <Link to="" className="btn btn-outline-dark bg-primary" to="/cart">
                <i className="fa fa-cart-plus me-1"></i>Cart{" "}
                {/* <span className="fw-bold fs-6">{cart.length}</span>{" "} */}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="navHandle"></div>
      </div>
  );
};

export default Navbar;
