import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="change-password-container">
      <form action="password.html" method="post">
        <h2>Change password</h2>
        <br />
        <p class="new">Your new password should be different</p>
        <p class="old"> from your old passport</p>
        <br />

        <div id="alert"></div>
        <label for="password"> New Password</label>
        <br />
        <input type="password" id="password" />
        <br />
        <br />
        <label for="password-verify">Confirm password</label>
        <br />
        <input type="password" id="password-verify" />
        <br />
        <br />
        <br />
        <button type="submit">
          <Link href="password.html"></Link>Reset
        </button>
        <br />
      </form>
    </div>
  );
};

export default ChangePassword;
