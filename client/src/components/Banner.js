import React from "react";
import Navbar from './Navbar';
import "../styles/Banner.css";

const Banner = props => {
  return (
    <header>
      <div className="app-container">
        <h1 className="header-title">Sudoku</h1>
        <h2 className="header-subtitle">Come play!</h2>
      </div>
      <Navbar />
    </header>
  );
};
export default Banner;
