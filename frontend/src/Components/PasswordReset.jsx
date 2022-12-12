import React from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div class="password-reset-container">
      <div class="bg-text">
        <h3>
          <strong>Your password has been reset</strong>
        </h3>
        <p>
          <small>
            Your password has been successfully reset
            <br />
            Click below to login
          </small>
        </p>
        <button type="button">
          <Link>Continue</Link>
        </button>
      </div>
    </div>
  );
};

export default PasswordReset;
