import React from "react";
import TipTile from "./TipTile";
import "../styles/HelpLayout.css";
import tipsData from "../data/TipsData/index";

const HelpLayout = () => {
  return (
    <div className="app-body">
      <div className="app-container">
        <div className="how-to__container">Mouse over tips to reveal them</div>
        <div className="tips__container">
          {Object.keys(tipsData).map((key, index) => {
            const data = tipsData[key];
            return (
              <TipTile key={index} title={data.title} description={data.tip} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpLayout;
