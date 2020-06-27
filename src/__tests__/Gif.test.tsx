import React from 'react'
import Gif from '../Gif'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const initialState = {gifs: {isFetching: false, data: []}, ui: {showOriginalId:''}}
  const mockStore = configureStore()
  let store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}><Gif id="anyId" preview="preview.img" original="original" title="title" showOriginalId="otherId" /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});