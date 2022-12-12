import React from "react";

import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <form action="success.html" method="post">
          <div className="signin-info">
            <h2>Welcome back!</h2>
            <br />
            <strong>Login with your social media account</strong>
            <br />
            <br />
            <Link to="#">
              <i className="fa-brands fa-google fa-2x"></i>
            </Link>
            or
            <Link to="#">
              <i className="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <br />
          </div>
          <br />

          <div className="signin-form-input">
            <label for="email">
              <b>Email</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter email address"
              name="email"
              id="email"
              required
            />
            <br />
            <br />
            <label for="psw">
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
            <br />
            <br />
            <input type="checkbox" unchecked="unchecked" name="remember" />
            Remember me
            <span class="psw">
              <Link to="#"> Forgot password?</Link>
            </span>
            <br />
            <br />
            <button type="submit">
              <Link to="login.html"></Link>Login
            </button>
            <br />
            <br />
            <h4>
              Don't have an account? <Link to="./index.html"> Sign Up </Link>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
