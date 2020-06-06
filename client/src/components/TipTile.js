import React from "react";
import "../styles/TipTile.css";

const TipTile = (props) => {
  const { title, description } = props;
  return (
    <div className="main__container">
      <div className="card__container">
        <div className="card__front">
          <div className="text-content">
            <div className="title-content">{title}</div>
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
