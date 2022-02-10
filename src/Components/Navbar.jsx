import React from "react";
import { useSelector } from "react-redux";
// import "./navbar.scss"
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const cart= useSelector((state) => state.cart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark shadow-sm py-3">
        <div className="container ">
          <NavLink className="navbar-brand fw-bold" to="/">
            QUICK-STORE
          </NavLink>
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
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/content">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="" className="btn btn-outline-dark bg-primary me-2">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="" className="btn btn-outline-dark bg-primary  me-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="" className="btn btn-outline-dark bg-primary" to="/cart">
                <i className="fa fa-cart-plus me-1"></i>Cart({
                  cart.length
                })
                {/* <span className="fw-bold fs-6">{cart.length}</span>{" "} */}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="navHandle"></div>
      </div>
  );
};

export default Navbar;
