import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from 'reducers'

const configreStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, devToolsEnhancer({}))
  return store
}

export default configreStore
