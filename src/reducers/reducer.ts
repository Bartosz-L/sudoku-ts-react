import { IReducer } from './interfaces'
import { AnyAction } from 'redux'
import { createFullGrid } from 'utils'
import * as types from './types'

const initialState: IReducer = {}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFullGrid(),
      }
    default:
      return state
  }
}

export default reducer
