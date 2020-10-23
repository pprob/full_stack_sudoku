import React from "react";
import "../styles/TipTile.css";

const TipTile = ({ title, description }) => {
  return (
    <div className="main__container">
      <div className="card__container">
        <div className="card__front">
          <div className="text-content">
            <div className="tile-title-content">{title}</div>
          </div>
        </div>
        <div className="card__back">
          <div className="text-content">{description}</div>
        </div>
      </div>
    </div>
  );
};
export default TipTile;
