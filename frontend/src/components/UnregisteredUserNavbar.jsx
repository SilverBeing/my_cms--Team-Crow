import React from "react";
import { Link } from "react-router-dom";

const UnregisteredUserNavbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light p-3">
          <Link className="navbar-brand" href="#">
            <img
              src="https://res.cloudinary.com/dxqgshzri/image/upload/v1670568832/IMG_1486_-_Copy_th98gx.png"
              alt="brand_logo"
              className="img-fluid"
              style={{ "max-width": "80px" }}
            />
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
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Products
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Resources
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Documentation
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  About Us
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/onBoarding/signin">
                <button type="button" className="btn btn-outline-success">
                  Login
                </button>
              </Link>
              <Link to="/onBoarding">
                <button type="submit" className="btn btn-success">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default UnregisteredUserNavbar;
