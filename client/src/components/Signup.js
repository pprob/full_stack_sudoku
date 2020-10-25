import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import {
  setEmailField,
  setUsernameField,
  setPasswordField,
  setErrorField,
  removeErrorField,
  Loading,
  hasLoaded,
  setPasswordErrorField,
  setEmailErrorField,
} from "../redux/actions/signupActions";
import Labels from '../data/labels';
import "../styles/Signup.css";
import axios from "axios";
import validator from "validator";
import labels from "../data/labels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

//state for email/username/password

const Signup = ({ signupState, dispatch, history }) => {
  const {
    error,
    email,
    password,
    username,
    isLoading,
    errorFields: { emailError, passwordError },
  } = signupState;

  const [modalOpen, setModalStatus] = useState(false);

  const setModalOpenOrClose = () => {
    
    setModalStatus(!modalOpen);
  };

  const setEmail = (e) => {
    const value = e.currentTarget.value.trim();

    if (!validator.isEmail(value)) {
      dispatch(setEmailErrorField(labels.emailErrorField));
    } else {
      dispatch(setEmailErrorField(""));
    }
    return dispatch(setEmailField(value));
  };

  const setUsername = (e) => {
    const value = e.currentTarget.value.trim();

    dispatch(setUsernameField(value));
  };
  const setPassword = (e) => {
    const value = e.currentTarget.value.trim();
    if (value.toLowerCase().includes("password")) {
      dispatch(setPasswordErrorField(labels.passwordContainsError));
    }
    dispatch(setPasswordField(value));
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const requestField = {
      email: email,
      username: username,
      password: password,
    };

    try {
      dispatch(Loading());
      const response = await axios.post("/api/users/register", requestField);
      if (response.data.success) {
        dispatch(hasLoaded());
        dispatch(removeErrorField());
        setModalOpenOrClose();
        setTimeout(() => {
          return history.push("/login");
        }, 2000)
      }
    } catch (e) {
      dispatch(hasLoaded());
      const { data } = e.response;
      if (data.error.includes("email")) {
        dispatch(
          setErrorField(
            "This email is already in use or not valid, please use a different email"
          )
        );
      } else if (data.error.includes("username")) {
        dispatch(
          setErrorField(
            "This username has already been taken. Please choose a different username"
          )
        );
      } else {
        dispatch(
          setErrorField("Error registering. Make sure all fields are correct.")
        );
      }
    }
  };

  return (
    <Fragment>
      {modalOpen && <Modal title="Sucess!"><div className="redirect-login-page">{Labels.TakeToLoginPage}</div></Modal>}
      <div className="app-body">
        <div className="app-container">
          <div className="signup-container">
            <div className="header">
              <h1 className="signup-header">Welcome, create a free account</h1>
              <h2 className="signup-subtitle">Track your scores and more</h2>
            </div>
            <div className="signup-form">
              <label className="signup-label">Email address</label>
              <input
                className="signup-field"
                value={signupState.email}
                onChange={setEmail}
              />
              {emailError && <div className="error-field">{emailError}</div>}
              <label className="signup-label">Username</label>
              <input
                className="signup-field"
                value={signupState.username}
                onChange={setUsername}
              />
              <label className="signup-label">Password</label>
              <input
                type="password"
                className="signup-field"
                value={signupState.password}
                onChange={setPassword}
              />
              {passwordError && (
                <div className="error-field">{passwordError}</div>
              )}
              {error && (
                <div className="error-container">
                  <label>{error}</label>
                </div>
              )}
              <div className="submit-button-container">
                <button
                  type="submit"
                  className="submit-button-signup"
                  onClick={onSubmit}
                >
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                    <span className="signup-button-text">Create account!</span>
                  </span>
                </button>
              </div>
            </div>
            {isLoading && <Loader />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    signupState: state.signupState,
  };
};

export default connect(mapStateToProps)(Signup);
