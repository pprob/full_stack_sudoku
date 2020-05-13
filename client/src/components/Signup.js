import React from "react";
import { connect } from "react-redux";
import {
  setEmailField,
  setUsernameField,
  setPasswordField,
} from "../redux/actions/signupActions";
import "../styles/Signup.css";
import axios from 'axios'

//state for email/username/password

const Signup = (props) => {
  const { signupState, dispatch } = props;
  console.log(signupState);
  const setEmail = (e) => {
    dispatch(setEmailField(e.target.value));
  };
  const setUsername = (e) => {
    dispatch(setUsernameField(e.target.value));
  };
  const setPassword = (e) => {
    dispatch(setPasswordField(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='app-body'>
      <div className='app-container'>
        <div className='header'>
          <h1>Welcome - It's good to see you</h1>
          <h2>Let's get you signed in</h2>
        </div>
        <div className='form-container'>
          <form onSubmit={onSubmit}>
            <label>Email address</label>
            <input
              className='field'
              placeholder='e.g abc@hotmail.com'
              value={signupState.email}
              onChange={setEmail}
            ></input>
            <label>Username</label>
            <input
              className='field'
              placeholder='Choose your user id. e.g sudokumeister1337'
              value={signupState.username}
              onChange={setUsername}
            ></input>
            <label>Password</label>
            <input
              type='password'
              className='field'
              placeholder='Must be minimum 8 characters length'
              value={signupState.password}
              onChange={setPassword}
            ></input>
            <button type='submit' className='submit-button'>Sign up!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signupState: state.signupState,
  };
};

export default connect(mapStateToProps)(Signup);
