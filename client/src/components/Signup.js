import React from "react";
import { connect } from "react-redux";
import {
  setEmailField,
  setUsernameField,
  setPasswordField,
  setErrorField,
  removeErrorField
} from "../redux/actions/signupActions";
import "../styles/Signup.css";
import axios from "axios";

//state for email/username/password

const Signup = (props) => {
  const { signupState, dispatch } = props;
  const { error, email, password, username } = signupState;

  const setEmail = (e) => {
    dispatch(setEmailField(e.target.value));
  };
  const setUsername = (e) => {
    dispatch(setUsernameField(e.target.value));
  };
  const setPassword = (e) => {
    dispatch(setPasswordField(e.target.value));
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const requestField = {
      email: email,
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('/api/users/register', requestField)
      if (response.data.success) {
        dispatch(removeErrorField())
        alert('Successfully registered! Taking you to the login page')
        props.history.push('/login')
      }
    } catch (e) {
      
      const { data } = e.response
      if(data.error.includes('email')) {
        dispatch(setErrorField('This email is already in use, please use a different email'))
      } else if(data.error.includes('username')) {
        dispatch(setErrorField('This username has already been taken. Please choose a different username'))
      } else {
        dispatch(setErrorField('Error registering. Please try again.'))
      }
    }
  };

  return (
    <div className="app-body">
      <div className="app-container">
        <div className="header">
          <h1 className="signup-header">Welcome - It's good to see you!</h1>
          <h2 className="signup-subtitle">Let's get you registered!</h2>
          <h3 className="signup-subtitle-second">
            this way we can track your wins, best times and more!
          </h3>
        </div>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <label className="label">Email address</label>
            <input
              className="field"
              placeholder="e.g abc@hotmail.com"
              value={signupState.email}
              onChange={setEmail}
            ></input>
            <label className="label">Username</label>
            <input
              className="field"
              placeholder="Choose your user id. e.g sudokumeister1337"
              value={signupState.username}
              onChange={setUsername}
            ></input>
            <label className="label">Password</label>
            <input
              type="password"
              className="field"
              placeholder="Must be minimum 8 characters length"
              value={signupState.password}
              onChange={setPassword}
            ></input>
            {error && (
              <div className="error-container">
                <label>{error}</label>
              </div>
            )}
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Sign up!
              </button>
            </div>
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
