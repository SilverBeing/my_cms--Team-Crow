import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo-dark.png";
import dp from "../Assets/Images/Frame-1.png";
const RegisteredUserNavbar = () => {
  return (
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>

        <Link class="navbar-brand logo" to="#">
          <img src={logo} height="50" alt="CROW Logo" />
        </Link>
        <h2 class="fw-bold ms_search">{}</h2>

        <form class="d-none d-md-flex input-group w-auto my-auto ms_search">
          <input
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder="Search Templates"
            style={{ "min-width": "225px" }}
          />
          <span class="input-group-text border-0">
            <i class="fa fa-search"></i>
          </span>
        </form>

        <ul class="navbar-nav ms-auto d-flex flex-row">
          <li class="nav-item dropdown">
            <Link
              class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </Link>
          </li>

          <li class="nav-item dropdown">
            <Link
              class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={dp}
                alt="avatar"
                class="rounded-circle avatar"
                height="22"
                loading="lazy"
              />
              <span class="fw-bold">Mirabel</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RegisteredUserNavbar;
