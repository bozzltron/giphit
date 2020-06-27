import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('App', () => {
  const initialState = {gifs: {isFetching: false, data: []}, ui: {showOriginalId:''}}
  const mockStore = configureStore()
  let store;

  it('renders', () => {
    store = mockStore(initialState)
    const { getByPlaceholderText } = render(<Provider store={store}><App /></Provider>)

    expect(getByPlaceholderText('Search for gifs')).not.toBeNull()
  })
})