import React from "react";
import BoardRow from "./BoardRow";
import "../styles/Board.css";


const Board = props => {
  const nineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
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
export default Board

