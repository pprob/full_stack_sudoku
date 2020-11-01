import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../styles/Leaderboard.css";
import Loader from "./Loader";
import LeaderboardRow from "./LeaderboardRow";
import PaginationButtons from "./PaginationButtons";
import {
  setPlayerScores,
  setFilter,
} from "../redux/actions/playerScoreActions";
import { filterPlayerScoresSelector } from "../redux/selectors/selectors";

const Leaderboard = (props) => {
  const { dispatch, playerScores } = props;

  const [loaded, setLoaded] = useState(false);
  const [leaderboardPage, setLeaderboardPage] = useState(1);
  const [pageResults, setPageResults] = useState(5);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get("/api/scores/leaderboard");
      const filteredScores = filterLeaderboardScoresByRank(
        response.data.userData
      );
      const rankedFilteredScores = filteredScores.map((player, index) => {
        return {
          ...player,
          rank: index + 1,
        };
      });
      dispatch(setPlayerScores([...rankedFilteredScores]));
      return setLoaded(true);
    } catch (e) {}
  };
  const filterLeaderboardScoresByRank = (scores) => {
    const filteredScores = scores
      .filter((score) => score.wins > 0)
      .sort((a, b) => b.wins - a.wins);
    return filteredScores;
  };

  const handlePlayerFilter = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };
  const onClickBack = () => {
    setLeaderboardPage(leaderboardPage - 1)
  }

  const onClickNext = () => {
    setLeaderboardPage(leaderboardPage + 1)
  }
  const onClickButton = (buttonValue) => {
    console.log(buttonValue)
    setLeaderboardPage(buttonValue)
  }

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const lastPaginationIndex = leaderboardPage * pageResults;
  const firstPaginationIndex = lastPaginationIndex - pageResults;
  const paginatedResults = playerScores.slice(
    firstPaginationIndex,
    lastPaginationIndex
  );
  console.log( firstPaginationIndex,lastPaginationIndex, paginatedResults)
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
            <div className="leaderboard-table__container">
              <nav className="search">
                <div className="search-title">
                  <h1>Current Standings</h1>
                </div>
                <div className="search-bar">
                  <input
                    type="search"
                    placeholder="Search player..."
                    onChange={handlePlayerFilter}
                  ></input>
                </div>
              </nav>
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Wins</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedResults?.map((user, index) => {
                    return (
                      <LeaderboardRow
                        rank={user.rank}
                        userName={user.userName}
                        key={index}
                        wins={user.wins}
                      />
                    );
                  })}
                </tbody>
              </table>
              <PaginationButtons
                playerResultsLength={playerScores.length}
                pageNumber={leaderboardPage}
                pageDisplayLength={pageResults}
                onClickBack={onClickBack}
                onClickNext={onClickNext}
                onClickButton={onClickButton}
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playerScores: filterPlayerScoresSelector(state),
  };
};

export default connect(mapStateToProps)(Leaderboard);
