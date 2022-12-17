import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../Components/LeftSideBar";
import RegisteredUserNavbar from "../Components/RegisteredUserNavbar";

const RegisteredUserDashboard = () => {
  return (
    <div>
      <RegisteredUserNavbar />
      <div>
        <LeftSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RegisteredUserDashboard;
