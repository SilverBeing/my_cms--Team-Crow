import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Api/axios";

import RegistrationSuccess from "./RegistrationSuccess";

const REGISTER_URL = "/api/auth/register";
const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);
  useEffect(() => {
    setValidMatch(password === confirmPassword);
  }, [password, confirmPassword]);
  useEffect(() => {
    setErrMsg("");
  }, [userName, password, confirmPassword]);

  const handleChange1 = (e) => {
    setFacebook(e.target.value);
  };
  const handleChange2 = (e) => {
    setInstagram(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          userName,
          email,
          password,
          facebook,
          instagram,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));

      setSuccess(true);
      setEmail("");
      setConfirmPassword("");
      setFacebook("");
      setInstagram("");
      setPassword("");
      setUserName("");
    } catch (e) {
      if (!e?.response) {
        setErrMsg("No Server Response");
      } else if (e.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {!success ? (
        <RegistrationSuccess />
      ) : (
        <div className="signup-container">
          <p className={errMsg ? "errorMessage" : "offscreen"} ref={errRef}>
            {errMsg}
          </p>
          <div class="container">
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <h2>Create an account</h2>
                <p>Become a CROW member and enjoy exclusive offers</p>

                <br></br>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="Username"
                  id="Username"
                  required
                  ref={userRef}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br></br>

                <br></br>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <p
                  id="confirmnote"
                  className={!validMatch ? "instructions" : "offscreen"}
                >
                  Must match the first password input field.
                </p>

                <br></br>

                <strong>Social Media Links</strong>

                <br></br>

                <br></br>
                <input
                  type="text"
                  placeholder="Facebook"
                  name="Social MediaLink Platform"
                  id="Social MediaLink Platform"
                  required
                />
                <input
                  type="url"
                  placeholder="www.facebook.com/myusername"
                  name="Link"
                  id="Link"
                  required
                  value={facebook}
                  onChange={handleChange1}
                />
                <br></br>
                <br></br>
                <input
                  type="text"
                  placeholder="Instagram"
                  name="Social MediaLink Platform1"
                  id="Social MediaLink Platform1"
                  required
                />
                <input
                  type="url"
                  placeholder="www.instagram.com/myusername"
                  name="Link1"
                  id="Link1"
                  value={instagram}
                  onChange={handleChange2}
                  required
                />
                <br></br>
                <br></br>

                <div className="more-info">
                  <input type="checkbox" checked="checked" class="emptybtn" />
                  By signing up, i agree to the
                  <Link to="./forgetpassword.html"> Terms & Conditions </Link>
                  <br></br>
                  <br></br>
                  <button
                    type="submit"
                    class="createbtn"
                    disabled={validMatch ? false : true}
                  >
                    Create Account
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h5>
                    Already have an account?{" "}
                    <Link to="/onBoarding/signin">Log In </Link>
                  </h5>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
