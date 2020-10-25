import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "../styles/TipTile.css";

const TipTile = ({ title, description }) => {
  return (
    <div className="main__container">
      <div className="card__container">
        <div className="card__front">
          <div className="text-content">
            <div className="tile-title-content">
              {title}
              <FontAwesomeIcon className="tip-fa-pointer"icon={faHandPointer}/>
            </div>
          </div>
        </div>
        <div className="card__back">
          <FontAwesomeIcon className="tip-fa-icon"icon={faLightbulb} />
          <div className="card-text-content">{description}</div>
        </div>
      </div>
    </div>
  );
};
export default TipTile;
