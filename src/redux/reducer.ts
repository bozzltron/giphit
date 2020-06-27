import { combineReducers } from 'redux'
import { gifsReducer } from './gifs/reducer'
import { uiReducer } from './ui/reducer'

export const rootReducer = combineReducers({
  gifs: gifsReducer,
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>