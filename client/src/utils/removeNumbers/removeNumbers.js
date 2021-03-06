import global from '../../global/index'
import getRandomIndex from '../getRandomIndex/getRandomIndex'
import copyGrid from '../copyGrid/copyGrid'
import solveGrid from '../solveGrid/solveGrid'


const removeNumbers = (grid, attempts = 5) => {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }
    const backup = grid[row][col];
    grid[row][col] = 0
    
    const gridCopy = copyGrid(grid);

    global.counter = false
    solveGrid(gridCopy);

    if (!global.counter) {
      grid[row][col] = backup;
      attempts--
    }
  }
  return grid;
}

export default removeNumbers
