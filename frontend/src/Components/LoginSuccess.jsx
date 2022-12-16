import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="success-page">
      <i className="fa fa-check"></i>
      <h1>Welcome! You are logged in</h1>
      <button onClick={handleNavigate} className="success-button">
        Go to your Dashboard
      </button>
    </div>
  );
};

export default LoginSuccess;
