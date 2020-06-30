import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Leaderboard.css";
import Loader from "./Loader";
import LeaderboardRow from './LeaderboardRow'

const Leaderboard = () => {
  const [loaded, setLoaded] = useState(false);
  const [userScores, setUserScores] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get("/api/scores/leaderboard");
      const filteredScores = filterLeaderboardScores(response.data.userData)
      setUserScores([...filteredScores])
      return setLoaded(true)
    } catch (e) {
      console.log(e.message);
    }
  };

  const filterLeaderboardScores = (scores) => {
    return scores.filter((score) => score.wins > 0)
  }
  useEffect(() => {
    fetchLeaderboard();
  }, []);
  console.log(userScores)
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
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Wins</th>
                  </tr>
                </thead>
                <tbody>
                  {userScores.map((user, index) => {
                    const rank = index + 1
                    const userName = user.userName
                    const wins = user.wins
                    return <LeaderboardRow rank={rank} userName={userName} key={index} wins={wins}/>
                  })}
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
