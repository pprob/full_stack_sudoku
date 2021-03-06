import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import BoardRow from "./BoardRow";
import axios from "axios";
import { useAlert } from "react-alert";
import "../styles/Board.css";
import { createNewGame } from "../redux/actions/actions";
import { BoardState, State } from "../typings/types";
import { Dispatch, AnyAction } from "redux";

// interface StateProps {
//   boardState: BoardState
// }
// interface DispatchProps {
//   dispatch: Dispatch<AnyAction>
// }

// type Props = StateProps & DispatchProps

const Board = (props: { boardState: any; dispatch: any }) => {
  const { boardState, dispatch } = props;
  const {
    inPlay,
    gameDifficulty,
    usedSolver,
    cellValues,
    solvedCellValues,
  } = boardState;
  const nineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const customAlert = useAlert();

  const updateScore = async () => {
    const update = {
      difficulty: gameDifficulty,
    };
    await axios.patch("/api/scores/update-score", update);
    return true;
  };

  const checkGameOver = (): boolean => {
    var hasWon = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (cellValues[i][j] !== solvedCellValues[i][j]) {
          hasWon = false;
          break;
        }
      }
    }
    return hasWon;
  };

  useEffect(() => {
    if (inPlay) {
      const gameWon = checkGameOver();
      if (gameWon && !usedSolver) {
        updateScore();
        customAlert.success(
          `Congratulations! You won! If you're logged in, we'll track your scores!`
        );
        setTimeout(() => {
          customAlert.info("Creating a new game!");
          dispatch(createNewGame(gameDifficulty));
        }, 5000);
      }
    }
  });
  return (
    <div className="board-container">
      <table className="board">
        <tbody>
          {nineArray.map((number) => {
            return <BoardRow key={number} rowIndex={number - 1} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    boardState: state.boardState,
  };
};
export default connect(mapStateToProps)(Board);
