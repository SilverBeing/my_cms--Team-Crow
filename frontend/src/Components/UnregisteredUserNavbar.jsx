import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Assets/Images/logo-dark.png";

const UnregisteredUserNavbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light p-3 navigation position-fixed w-100">
          <Link class="navbar-brand logo" to="#">
            <img src={logo} height="50" alt="CROW Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Resources
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/documentation">
                  Documentation
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About Us
                </NavLink>
              </li>
            </ul>
            <div>
              <NavLink to="/onBoarding/signin">
                <button type="button" className="btn btn-outline-success">
                  Login
                </button>
              </NavLink>
              <NavLink to="/onBoarding">
                <button type="submit" className="btn btn-success">
                  Sign up
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default UnregisteredUserNavbar;
