import React from "react";
import { Link } from "react-router-dom";

const ConfirmPassword = () => {
  return (
    <div class="confirm-container">
      <form>
        <h2>Forgot Password</h2>
        <br />
        <p class="code">Please enter the 4 digit code sent to your</p>
        <p class="email">email</p>
        <br />
        <div class="button">
          <button type="button" class="digitbtn">
            4
          </button>
          <button type="button" class="digitbtn">
            4
          </button>
          <button type="button" class="digitbtn">
            0
          </button>
          <button type="button" class="digitbtn">
            0
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
          <button type="submit">
            <Link to=""></Link>Verify
          </button>
          <br></br>
        </div>
      </form>
    </div>
  );
};

export default ConfirmPassword;
