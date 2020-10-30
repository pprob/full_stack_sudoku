import isInRow from '../isInRow/isInRow'
import isInCol from '../isInCol/isInCol'
import identifyWorkingSquare from '../identifyWorkingSquare/identifyWorkingSquare'
import isInSquare from '../isInSquare/isInSquare'


const solveGrid2 = (grid) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        for (let n = 1; n <= 9; n++) {
          if(!isInRow({ grid, row: i, number: n})) {
            if(!isInCol({ grid, col: j, number: n})) {
              const workingSquare = identifyWorkingSquare({grid, row: i, col: j})
              if(!isInSquare({ square: workingSquare, number: n})) {
                grid[i][j] = n;
                if(!solveGrid2(grid)) {
                  grid[i][j] = 0
                } else {               
                  return true
                }
              }
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

export default solveGrid2