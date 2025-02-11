import { GRID, NUMBERS } from 'typings'
import global from 'global'
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid A 9x9 array consisting of values from 0-9
 */
const solveGrid = (grid: GRID) => {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value

              // check if grid is full
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

  grid[row][col] = 0
}

export default solveGrid
