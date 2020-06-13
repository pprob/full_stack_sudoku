import React from "react";
import { connect } from 'react-redux'
import { createNewGame, showSolution } from '../redux/actions/actions'
import "../styles/Tools.css";

const Tools = props => {
  const { dispatch, infoState, boardState} = props;
  
  const createGame = (e) => {
    dispatch(createNewGame(infoState.difficulty))
  }

  const displaySolution = (e) => {
    if (boardState.inPlay) {
      dispatch(showSolution())
    } else {
      alert('Please start a new game first')
    }
  }

  return (
    <div className="button-container">
      <button className="button new-game" onClick={createGame}>
        New Game
      </button>
      <button className="button solve" onClick={displaySolution}>
        Solution
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    infoState: state.infoState,
    boardState: state.boardState
  }
}

export default connect(mapStateToProps)(Tools)

