import React, { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import axios from "axios";
import { Loading, hasLoaded } from "../redux/actions/signupActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons"

const Login = (props) => {
  const { dispatch } = props;
  const { isLoading } = props.signUpState;
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");

  const setEmail = (e) => {
    const value = e.currentTarget.value.trim();
    SetEmail(value);
  };

  const setPassword = (e) => {
    const value = e.currentTarget.value.trim();
    SetPassword(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      dispatch(Loading());
      await axios.post("/api/users/login", formData);
      SetError("");
      dispatch(hasLoaded());
      props.history.push("/");
      window.location.reload();
    } catch (e) {
      dispatch(hasLoaded());
      SetError(e.response.data.error);
    }
    return;
  };

  return (
    <div className="app-body">
      <div className="app-container">
        <div className="login-container">
          <div className="title-container">
            <h1 className="login-header">Sign in!</h1>
            <h2 className="login-subheader">Sign in!</h2>
          </div>
          <div className="login-form">
            <label className="login-label">Email address</label>
            <input
              className="login-field"
              name="email"
              onChange={setEmail}
              value={email}
            ></input>
            <label className="login-label">Password</label>
            <input
              className="login-field"
              type="password"
              name="password"
              onChange={setPassword}
              value={password}
            ></input>
            <button type="submit" className="login-submit-button" onClick={onSubmit}>
              <span><FontAwesomeIcon icon={faLock}/><span className="login-button-label">Login</span></span>
            </button>
          </div>
          {error && (
            <div className="error_container">
              <label>
                Could not find email/password combination. Please try again.
              </label>
            </div>
          )}
          <p className="login-display-signup">
            New here? <NavLink to="/signup">create account</NavLink>
          </p>
        </div>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpState: state.signupState,
  };
};

export default connect(mapStateToProps)(Login);
