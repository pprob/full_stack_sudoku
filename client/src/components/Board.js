import React, { useEffect } from "react";
import { connect } from 'react-redux';
import BoardRow from "./BoardRow";
import axios from 'axios'
import { useAlert } from "react-alert";
import "../styles/Board.css";


const Board = props => {
  const { boardState } = props
  const { inPlay, gameDifficulty, usedSolver, cellValues, solvedCellValues } = boardState
  console.log(inPlay, gameDifficulty, usedSolver)
  const nineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(boardState)

  const customAlert = useAlert();

  const updateScore = async () => {
    const update = {
      difficulty: gameDifficulty
    }
    return await axios.patch('/api/scores/update-score', update)
  }

  const checkGameOver = () => {
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
        const response = updateScore()
        console.log(response)
        customAlert.success(`Congratulations! You won! If you're logged in, we'll track your scores!`)
      }
    }
  });
  return (
    <div className="board-container">
      <table className="board">
        <tbody>
          {nineArray.map(number => {
            return (
              <BoardRow
                key={number}
                rowIndex={number - 1}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boardState: state.boardState
  }
}
export default connect(mapStateToProps)(Board)

