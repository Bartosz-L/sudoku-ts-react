import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * Function that returns true if the value is already beign used in the current grid row
 * @param param0 Object with 9x9 Sudoku Grid, row index and a value
 */
const isInRow = ({ grid, row, value }: IInput): boolean => {
  return grid[row].includes(value)
}

export default isInRow
