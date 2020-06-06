import React, { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

// randomly using hooks for state rather than redux learning purposes

const Login = (props) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");

  const setEmail = (e) => {
    SetEmail(e.target.value);
  };

  const setPassword = (e) => {
    SetPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      await axios.post("/api/users/login", formData);
      SetError("");
      props.history.push("/");
    } catch (e) {
      SetError(e.response.data.error);
      alert("not found");
    }
  };

  return (
    <div className="app-body">
      <div className="app-container">
        <div className="title-container">
          <h1 className="login-header">Login page</h1>
          <h2 className="login-subheader">Sign in!</h2>
        </div>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <label className="label">Email</label>
            <input className="field" onChange={setEmail}></input>
            <label className="label">Password</label>
            <input
              className="field"
              type="password"
              onChange={setPassword}
            ></input>
            <button type="submit">Login</button>
          </form>
          {error && <div>broken</div>}
        </div>

        <p className="display-signup">
          Need to sign up first? click <NavLink to="/signup">here</NavLink> to
          take you to the sign up page
        </p>
      </div>
    </div>
  );
};

export default Login;
