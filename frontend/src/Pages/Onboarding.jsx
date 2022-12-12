import React from "react";
import { Outlet } from "react-router-dom";
import UnregisteredUserNavbar from "../Components/UnregisteredUserNavbar";

const Onboarding = () => {
  return (
    <>
      <UnregisteredUserNavbar />
      <Outlet />
    </>
  );
};

export default Onboarding;
