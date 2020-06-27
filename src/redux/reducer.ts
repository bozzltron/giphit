import { combineReducers } from 'redux'
import { gifsReducer } from './gifs/reducer'

export const rootReducer = combineReducers({
  gifs: gifsReducer
})

export type RootState = ReturnType<typeof rootReducer>