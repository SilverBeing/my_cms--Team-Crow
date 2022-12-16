import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white position-fixed "
    >
      <div className="sidebar position-sticky">
        <div className="list_item">
          <Link
            to="/Dashboard"
            className="fw-bold list-group-item list-group-item-action py-2 ripple "
          >
            <i className="fa-solid fa-house "></i>
            <span className="menu_listing">Home</span>
          </Link>
          <Link
            to="/Dashboard/businessCategory"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-briefcase"></i>
            <span className="menu_listing">Business</span>
          </Link>
          <Link
            to="/Dashboard/blogCategory"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-brands fa-blogger"></i>
            <span className="menu_listing">Blog</span>
          </Link>
          <Link
            to="/Dashboard/portfolioCategory"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-sharp fa-solid fa-briefcase"></i>
            <span className="menu_listing">Portfolio</span>
          </Link>
          <Link
            to="/Dashboard/insights"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-chart-line"></i>
            <span className="menu_listing">Insights</span>
          </Link>
          <Link
            to="#!"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-layer-group"></i>
            <span className="menu_listing">My Website</span>
          </Link>
          <Link
            to="/Dashboard/userAccount"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-user-tie"></i>
            <span className="menu_listing">Accounts</span>
          </Link>
          <Link
            to="/Dashboard/settings"
            className=" list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-gear"></i>
            <span className="menu_listing">Settings</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
