import shuffle from "../shuffle/shuffle";
import isInCol from "../isInCol/isInCol";
import isInRow from "../isInRow/isInRow";
import identifyWorkingSquare from "../identifyWorkingSquare/identifyWorkingSquare";
import isInSquare from "../isInSquare/isInSquare";
import checkGrid from "../checkGrid/checkGrid";


function fillGrid(grid) {
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(nums)
      
      for (let number of nums) {
        if (!isInRow({ grid, row, number })) {
          if (!isInCol({ grid, col, number })) {
            const square = identifyWorkingSquare({ grid, row, col })
            if (!isInSquare({ square, number })) {
              grid[row][col] = number
              if (checkGrid(grid)) return true 
              else if (fillGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }
  grid[row][col] = 0
}

export default fillGrid;
