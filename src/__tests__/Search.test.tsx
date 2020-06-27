import React from 'react';
import Search from '../Search';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


it('renders correctly', () => {
  const initialState = {gifs: {isFetching: false, data: []}, ui: {showOriginalId:''}}
  const mockStore = configureStore()
  let store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}><Search /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});