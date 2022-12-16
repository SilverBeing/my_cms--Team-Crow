import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="noMatch">
      <h1>404</h1>
      <h3>Page does not exist</h3>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default NoMatch;
