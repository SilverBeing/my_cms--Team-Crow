import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      <div class="container">
        <form method="post">
          <div className="form-input">
            <h2>Create an account</h2>
            <p>Become Link member and enjoy exclusive offers</p>

            <small class="name">Username</small>
            <small class="email">Email</small>
            <br></br>
            <input
              type="text"
              placeholder="Enter Username"
              name="Username"
              id="Username"
              required
            />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
            <br></br>
            <br></br>

            <small class="password">Password</small>
            <small class="confirm">Confirm </small>
            <br></br>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="psw"
              id="psw"
              required
            />
            <br></br>
            <br></br>

            <strong>Social MediLink Links</strong>
            <button type="submit" class="linkbtn">
              + add link
            </button>
            <br></br>
            <br></br>
            <br></br>

            <small class="smp"> Social MediLink Platform</small>
            <small class="link"> Link</small>
            <br></br>
            <input
              type="text"
              placeholder=" Input Social MediLink Platform"
              name="Social MediLink Platform"
              id="Social MediLink Platform"
              required
            />
            <input
              type="text"
              placeholder="e.g www.linkedin.com/myusername"
              name="Link"
              id="Link"
              required
            />
            <br></br>
            <br></br>
            <br></br>

            <div className="more-info">
              <input type="checkbox" checked="checked" class="emptybtn" />
              By signing up, i agree to the
              <Link to="./forgetpassword.html"> Terms & Conditions </Link>
              <br></br>
              <br></br>
              <button type="submit" class="createbtn">
                <Link to="signin.html"></Link>Create Account
              </button>
              <br></br>
              <br></br>
              <h5>
                Already have an account? <Link to="signin.html">Log In </Link>
              </h5>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
