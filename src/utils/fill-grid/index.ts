import { GRID, NUMBERS } from 'typings'
import {
  shuffle,
  isInRow,
  isInCol,
  identifyWorkingSquare,
  isInSquare,
  checkGrid,
} from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the possible combination of numbers until a solution is found
 * @param grid 9x9 Sudoku Grid
 */

const fillGrid = (grid: GRID) => {
  let row = 0
  let col = 0

  // loop for each block: 9x9 = 81
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        // is it not in grid row?
        if (!isInRow({ grid, row, value })) {
          // is it not in grid column?

          if (!isInCol({ col, grid, value })) {
            const square = identifyWorkingSquare({ col, grid, row })

            // is it not in the grid square?
            if (!isInSquare({ square, value })) {
              grid[row][col] = value

              // check grid if it is full, if yes, stop and return true
              if (checkGrid(grid)) return true
              // otherwise we run fillGrid(grid) again
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

export default fillGrid
