import { IReducer } from './interfaces'
import { AnyAction } from 'redux'
import { copyGrid, createFullGrid, removeNumbers, solveGrid } from 'utils'
import * as types from './types'

const initialState: IReducer = {}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)

      return {
        ...state,
        grid: challengeGrid,
      }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      }
    default:
      return state
  }
}

export default reducer
