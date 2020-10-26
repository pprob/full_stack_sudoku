import global from '../../global/index'
import isInRow from '../isInRow/isInRow'
import isInCol from '../isInCol/isInCol'
import identifyWorkingSquare from '../identifyWorkingSquare/identifyWorkingSquare'
import isInSquare from '../isInSquare/isInSquare'
import checkGrid from '../checkGrid/checkGrid'


const solveGrid = (grid) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9
    if (grid[row][col] === 0) {
      for (let number of numbers) {
        if (!isInRow({ grid, row, number})) {
          if (!isInCol({ grid, col, number })) {
            const square = identifyWorkingSquare({ grid, row, col })
            if (!isInSquare({ square, number })) {
              grid[row][col] = number
              if (checkGrid(grid)) {
                global.counter++
                break
              } else if (solveGrid(grid)) {
                return true
              }
            }
          }
        }
      }
      break
    }
  }
}
export default solveGrid