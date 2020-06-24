import { combineReducers } from 'redux'
import { ActionTypes, ResponseState } from './types'
import {
  REQUEST_GIFS,
  RECEIVE_GIFS
} from './actions'

const initialState: ResponseState = {
  isFetching: false,
  data: []
}

function gifs(
  state = initialState, 
  action: ActionTypes
): ResponseState {
  switch (action.type) {
    case REQUEST_GIFS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_GIFS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.offset > 0 ? state.data.concat(action.data) : action.data
      })
    default:
      return state
  }
}

function gifsReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case RECEIVE_GIFS:
    case REQUEST_GIFS:
      return Object.assign({}, state, gifs(state, action))
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  gifs: gifsReducer
})

export type RootState = ReturnType<typeof rootReducer>