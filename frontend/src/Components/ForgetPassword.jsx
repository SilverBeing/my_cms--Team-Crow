import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div class="forget-password-container">
      <form action="password.html" method="post">
        <span>
          <h2>Forgot Password</h2>
        </span>
        <p>Enter the email address used for your account</p>

        <div id="alert"></div>
        <label for="Email">Email</label>
        <br />
        <input
          type="text"
          placeholder="Enter Email Address"
          name="email"
          id="email"
          required
        />
        <br />
        <br />

        <button type="submit">
          <Link href="password.html"></Link>Send
        </button>
        <br />
        <h5>
          Already have an account? <a href="./forgetpassword.html"> Sign In </a>
        </h5>
      </form>
    </div>
  );
};

export default ForgetPassword;
