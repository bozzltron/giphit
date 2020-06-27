import { ActionTypes, UIState } from './types'
import {
  SHOW_ORIGINAL,
} from './actions'

const initialState: UIState = {
  showOriginalId: ''
}

export function uiReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SHOW_ORIGINAL:
      return Object.assign({}, state, {showOriginalId: action.id})
    default:
      return state
  }
}