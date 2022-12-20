import React, { useRef, useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../Api/axios";
import LoginSuccess from "./LoginSuccess";

const LOGIN_URL = "/api/auth/login";
const SignIn = () => {
  const { setAuth } = useAuth();
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

//   useEffect(() => {
//     emailRef.current.focus();
//   }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const token = response?.token;
      setAuth({ token });
      setEmail("");
      setPassword("");
      setSuccess(true);
      navigate(from, { replace: true });
    } catch (e) {
      if (!e?.response) {
        setErrMsg("No Server Response");
      } else if (e.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (e.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {!success ? (
        <LoginSuccess />
      ) : (
        <div className="signin-container">
          <p ref={errRef} className={errMsg ? "errorMessage" : "offscreen"}>
            {errMsg}
          </p>
          <div className="signin-form">
            <form onSubmit={handleSubmit}>
              <div className="signin-info">
                <h2>Welcome back!</h2>
              </div>
              <br />

              <div className="signin-form-input">
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <br />
                <input
                  ref={emailRef}
                  type="text"
                  placeholder="Enter email address"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <input type="checkbox" unchecked="unchecked" name="remember" />
                Remember me
                <span class="psw">
                  <Link to="/forgetpassword"> Forgot password?</Link>
                </span>
                <br />
                <br />
                <button type="submit">Login</button>
                <br />
                <br />
                <h4>
                  Don't have an account? <Link to="/onBoarding"> Sign Up </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
