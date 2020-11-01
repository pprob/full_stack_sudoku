import React from "react";
import "../styles/PaginationButtons.css"

const PaginationButtons = ({
  playerResultsLength,
  pageDisplayLength,
  pageNumber,
  onClickButton,
  onClickNext,
  onClickBack,
}) => {
  const maxPageLength = Math.ceil(playerResultsLength / pageDisplayLength);
  const mapButtons = [];
  for (let i = 1; i <= maxPageLength; i++) {
    mapButtons.push(i);
  }

  return (
    <div className="pagination-container">
      <button className={`pagination-button ${pageNumber}`} disabled={pageNumber === 1} onClick={onClickBack}>
        Previous
      </button>
      {mapButtons.map((buttonNumber) => {
        const value = buttonNumber;
        return (
          <button className={`pagination-button ${pageNumber === value ? 'pagination-selected' : ''}`} value={buttonNumber} onClick={() => onClickButton(value)}>
            {value}
          </button>
        );
      })}
      <button className={`pagination-button`} disabled={pageNumber === maxPageLength} onClick={onClickNext}>
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
