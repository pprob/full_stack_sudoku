import React from "react";
import "../styles/Login.css";
import { NavLink } from 'react-router-dom'

const Login = (props) => {
  return (
    <div className="app-body">
      <div className="app-container">
        <div className="title-container">
          <h1 className="login-header">Login page</h1>
          <h2 className="login-subheader">Sign in!</h2>
        </div>
        <div className="form-container">
          <form>
            <label className='label'>Email</label>
            <input className="field"></input>
            <label className='label'>Password</label>
            <input className="field"></input>
            <button type='submit'>Login</button>
          </form>
        </div>
        <p className='display-signup'>Need to sign up first? click <NavLink to='/signup'>here</NavLink> to take you to the sign up page</p>
      </div>
    </div>
  );
};

export default Login;
