import { ActionTypes, UIState } from './types'
import {
  SHOW_ORIGINAL,
  QUERY,
  OFFSET,
  USE_WEBP
} from './actions'

const initialState: UIState = {
  showOriginalId: '',
  query: '',
  offset: 0,
  useWebp: false
}

export function uiReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SHOW_ORIGINAL:
      return Object.assign({}, state, {showOriginalId: action.id})
    case QUERY:
      return Object.assign({}, state, {query: action.query})
    case OFFSET:
      return Object.assign({}, state, {offset: action.offset})
    case USE_WEBP:
      return Object.assign({}, state, {useWebp: action.useWebp})
    default:
      return state
  }
}