import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const ErrorPage = () => {
  return (
    <div className="app-body">
      <div className="error-layout-container">
        <div className="error-content">
          <div className="sadface-icon">
            <FontAwesomeIcon icon={faFrown} />
          </div>
          <div className="error-redirects">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">
              <button className="errorpage-button">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
