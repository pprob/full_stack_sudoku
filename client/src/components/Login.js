import React, { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import axios from "axios";
import { Loading, hasLoaded } from '../redux/actions/signupActions'

// randomly using hooks for state rather than redux learning purposes

const Login = (props) => {
  const { dispatch } = props
  const { isLoading } = props.signUpState
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
      dispatch(Loading())
      await axios.post("/api/users/login", formData);
      SetError("");
      dispatch(hasLoaded())
      props.history.push("/");
    } catch (e) {
      dispatch(hasLoaded())
      SetError(e.response.data.error);
      alert("Could not find email/password combination. Please try again");
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
            <button type="submit" className='submit-button'>Login</button>
          </form>
          {error && <div className='error_container'><label>Could not find email/password combination. Please try again.</label></div>}
        </div>
        <p className="display-signup">
          Need to sign up first? click <NavLink to="/signup">here</NavLink> to
          take you to the sign up page
        </p>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpState: state.signupState,
  }
}

export default connect(mapStateToProps)(Login);
