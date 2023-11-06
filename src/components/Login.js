import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" className="custom-links">
        <img
          src="https://ledgergurus.com/wp-content/uploads/2019/02/amazon-logo-transparent-800x258.png"
          alt="amazon-logo"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <label>E-mail or mobile phone number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signIn-button" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <Link to="/">Conditions of Use </Link> and{" "}
          <Link to="/">Privacy Notice</Link>.
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
          <span>
            {" "}
            <Link to="/">Need help?</Link>
          </span>
        </p>
        <hr aria-hidden="true" className="a-divider-normal"></hr>
        <p>Buy for work?</p>
        <div>
          <Link to="/">Shop on amazon business</Link>
        </div>
      </div>
      <p className="separator">New to amazon?</p>
      <button className="register-button" onClick={register}>Create your Amazon Account</button>
    </div>
  );
};

export default Login;
