import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../styles/Leaderboard.css";
import Loader from "./Loader";


const Leaderboard = () => {

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });

  const fetchLeaderboard = async () => {
    
  }

  return (
    <div className="app-body">
      <div className="app-container">
        {!loaded && (
          <div className="loader-placement">
            <Loader />
          </div>
        )}
        {loaded && (
          <section className="leaderboard__container">
            <div className="header__container">
              <h1 className="leaderboard-header">Leaderboard</h1>
              <h3 className="leaderboard-subtitle">
                This is the leaderboard for most wins. Only difficulty levels of
                10 are considered in the leaderboard.
              </h3>
            </div>
            <div className="leaderboard-table">
              <nav className="search">
                <div className="search-title">
                  <h1>Current Standings</h1>
                </div>
                <div className="search-bar">
                  <input type="search" placeholder="Search player..."></input>
                </div>
              </nav>
              <table>
                <thead>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Wins</th>
                </thead>
                <tbody>
                  {/* map axios response */}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
