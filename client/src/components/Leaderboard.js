import React, { useEffect, useState } from "react";
import "../styles/Leaderboard.css";
import Loader from "./Loader";
const Leaderboard = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true)
  });
  return (
    <div className="app-body">
      <div className="app-container">
      {!loaded && (
        <div className="loader-placement">
          <Loader />
        </div>
      )}
        {loaded && (
          <div className="leaderboard__container">
            <div className="header__container">
              <h1 className="leaderboard-header">Leaderboard</h1>
              <h3 className="leaderboard-subtitle">
                This is the leaderboard for most wins. Only difficulty levels of
                10 are considered in the leaderboard.
              </h3>
              <div className='leaderboard-container'>
                
              </div>

            </div>
            <div className="table__container"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
