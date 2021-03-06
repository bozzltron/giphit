import { ActionTypes, GifState, Gif } from './types'
import {
  REQUEST_GIFS,
  RECEIVE_GIFS
} from './actions'

const initialState: GifState = {
  isFetching: false,
  data: []
}

export function gifsReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case REQUEST_GIFS:
      return Object.assign({}, state, {isFetching: true, data: action.offset === 0 ? []: state.data })
    case RECEIVE_GIFS:
      return Object.assign({}, state, {isFetching: false, data: action.offset > 0 ? state.data.concat(action.data || []) : action.data})
    default:
      return state
  }
}