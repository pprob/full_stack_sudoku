import React from "react";
import { connect } from 'react-redux'
import { createNewGame} from '../redux/actions/actions'
import "../styles/Tools.css";

const Tools = props => {
  const { solve, stop, dispatch, deleteGame, goBack, infoState} = props;
  
  return (
    <div className="button-container">
      <button className="button new-game" onClick={e => dispatch(createNewGame(infoState.difficulty))}>
        New Game
      </button>
      <button className="button solve" onClick={solve}>
        Solution
      </button>
      <button className="button incorrect" onClick={stop}>
        Show incorrect
      </button>
      <button className="button delete" onClick={deleteGame}>
        Delete
      </button>
      <button className="button back" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    infoState: state.infoState
  }
}

export default connect(mapStateToProps)(Tools)

