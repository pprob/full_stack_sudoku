import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setActiveCells, setCellValue } from "../redux/actions/actions";
import { useAlert } from "react-alert";
import "../styles/BoardRow.css";

const BoardRow = (props) => {
  const {
    cellValues,
    solvedCellValues,
    rowIndex,
    activeCells,
    dispatch,
    feedback,
    boardState,
  } = props;
  
  const customAlert = useAlert();
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getValue = (row, column) => {
    return cellValues[row][column];
  };

  const isInPlay = (activeCells, row, column) => {
    const isSameAsActive =
      row === activeCells[0] && column === activeCells[1] ? true : false;
    if (row === activeCells[0] && !isSameAsActive) return true;
    if (column === activeCells[1] && !isSameAsActive) return true;
    return false;
  };
  const checkValid = (e, rowIndex, colIndex) => {
    if (cellValues.length === 0 || solvedCellValues.length === 0) {
      alert("Please start the game");
      return false;
    }
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      customAlert.error("You must enter a number between 0 and 9");
      return false;
    }
    if (solvedCellValues[rowIndex][colIndex] !== value && feedback) {
      customAlert.error("Invalid input, please try again");
      return false;
    }
    return true;
  };

  // Setting border classnames
  // columns
  const isLeftColBorder = (col) => {
    if (col === 0) {
      return true;
    }
    return false;
  };
  const isRightColBorder = (col) => {
    if (col === 2 || col === 5 || col === 8) {
      return true;
    }
    return false;
  };
  // rows
  const isTopRowBorder = (row) => {
    if (row === 0) {
      return true;
    }
    return false;
  };
  const isBottomRowBorder = (row) => {
    if (row === 2 || row === 5 || row === 8) {
      return true;
    }
    return false;
  };

  return (
    <tr>
      {columns.map((element) => {
        const colIndex = element - 1;
        var cellValue = getValue(rowIndex, colIndex);
        if (cellValue === 0) {
          cellValue = "";
        }
        const inPlay = isInPlay(activeCells, rowIndex, colIndex)
          ? "inPlay"
          : "";
        let borderClasses = "";
        if (isLeftColBorder(colIndex)) {
          borderClasses += "grid-border-left ";
        }
        if (isRightColBorder(colIndex)) {
          borderClasses += "grid-border-right ";
        }
        if (isTopRowBorder(rowIndex)) {
          borderClasses += "grid-border-top ";
        }
        if (isBottomRowBorder(rowIndex)) {
          borderClasses += "grid-border-bottom";
        }
        return (
          <td key={element} className={`square-cell ${borderClasses}`}>
            <input
              className={`square-input ${inPlay}`}
              type="text"
              value={cellValue}
              maxLength="1"
              onClick={(e) => dispatch(setActiveCells(rowIndex, colIndex))}
              onChange={(e) => {
                if (checkValid(e, rowIndex, colIndex)) {
                  const newValue = parseInt(e.target.value);
                  dispatch(setCellValue(rowIndex, colIndex, newValue));
                }
              }}
            />
          </td>
        );
      })}
    </tr>
  );
};
BoardRow.propTypes = {
  cellValues: PropTypes.array,
  solvedCellValues: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    boardState: state.boardState,
    cellValues: state.boardState.cellValues,
    solvedCellValues: state.boardState.solvedCellValues,
    activeCells: state.boardState.activeCells,
    feedback: state.infoState.feedback,
  };
};

export default connect(mapStateToProps)(BoardRow);
