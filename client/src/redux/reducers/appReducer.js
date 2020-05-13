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
  feedback: true,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'CREATE_NEW_GAME':
      const solvedGrid = createFullGrid()
      const copyOfSolvedGrid = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(copyOfSolvedGrid, action.difficulty)

      return {
        ...state,
        cellValues: challengeGrid,
        solvedCellValues: solvedGrid
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
    default: 
      return state
  }
}