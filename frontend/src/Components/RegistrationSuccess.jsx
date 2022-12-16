import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/onBoarding/signin");
  };
  return (
    <div className="success-page">
      <i className="fa fa-check"></i>
      <h1>Registration Successfull</h1>
      <button onClick={handleNavigate}>Login</button>
    </div>
  );
};

export default RegistrationSuccess;
