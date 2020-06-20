import createFullGrid from '../../utils/createFullGrid/createFullGrid'
import copyGrid from '../../utils/copyGrid/copyGrid'
import removeNumbers from '../../utils/removeNumbers/removeNumbers'


const defaultState = {
  cellValues: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  solvedCellValues: [],
  activeCells: [],
  difficulty: 5,
  inPlay: false,
  gameOver: false,
  usedSolver: false,
  gameDifficulty: undefined
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'CREATE_NEW_GAME':
      const solvedGrid = createFullGrid()
      const copyOfSolvedGrid = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(copyOfSolvedGrid, action.difficulty)

      return {
        ...state,
        inPlay: true,
        cellValues: challengeGrid,
        solvedCellValues: solvedGrid,
        gameDifficulty: action.difficulty
      }
    case 'SET_ACTIVE_CELLS':
      const activeCells = []
      activeCells.push(action.row, action.col)
      return {
        ...state,
        activeCells: activeCells
      }
    case 'SET_CELL_VALUE':
      const currentGrid = state.cellValues
      currentGrid[action.row][action.col] = action.value
      return {
        ...state,
        cellValues: [...currentGrid]
      }
    case 'SHOW_SOLUTION':
      const solvedCellValues = state.solvedCellValues
      console.log(solvedCellValues)
      return {
        ...state,
        usedSolver: true,
        gameOver: true,
        cellValues: solvedCellValues
      }
    case 'GAME_WON':
      return {
        ...state,
        gameOver: true
      }
    default: 
      return state
  }
}