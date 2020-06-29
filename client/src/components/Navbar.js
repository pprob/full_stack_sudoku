import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { loggedIn } = props;
  return (
    <div className="app-container">
      <div className="navbar-container">
        <div className="nav-list">
          <div className="list-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="selected"
              exact={true}
            >
              Game
            </NavLink>
          </div>
          {!loggedIn && (
            <div className="list-item">
              <NavLink
                to="/signup"
                className="nav-link"
                activeClassName="selected"
              >
                Sign up
              </NavLink>
            </div>
          )}
          {!loggedIn && (
            <div className="list-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="selected"
              >
                Login
              </NavLink>
            </div>
          )}
          {loggedIn && (
            <div className="list-item">
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="selected"
              >
                Your profile
              </NavLink>
            </div>
          )}
          <div className="list-item">
            <NavLink
              to="/leaderboard"
              className="nav-link"
              activeClassName="selected"
            >
              Leaderboard
            </NavLink>
          </div>
          <div className="list-item">
            <NavLink
              to="/how-to-play"
              className="nav-link"
              activeClassName="selected"
            >
              How to play
            </NavLink>
          </div>
          <div className="list-item">
            <NavLink
              to="/donate"
              className="nav-link"
              activeClassName="selected"
            >
              Donate!
            </NavLink>
          </div>
          {loggedIn && (
            <div className="list-item">
              <NavLink to="/logout" className="nav-link" activeClassName="selected">
                Logout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
