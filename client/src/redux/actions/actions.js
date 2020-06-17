
// Create new game

// set active cells
export const setActiveCells = (row, col) => {
  return {
    type: 'SET_ACTIVE_CELLS',
    row,
    col
  }
}

// set cell value
export const setCellValue = (row, col, value) => {
  return {
    type: 'SET_CELL_VALUE',
    row,
    col,
    value
  }
}
// Tools
// Create new game
export const createNewGame = (difficulty) => {
  return {
    type: 'CREATE_NEW_GAME',
    difficulty
  }
}

export const showSolution = () => {
  return {
    type: 'SHOW_SOLUTION'
  }
}

export const gameWon = () => {
  return {
    type: 'GAME_WON'
  }
}

