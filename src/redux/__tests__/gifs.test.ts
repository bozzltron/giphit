import configureStore from 'redux-mock-store'
import {gifsReducer} from '../gifs/reducer'
import Gif from '../../Gif'

describe('gif', () => {

  describe('reducer', () => {

    it('REQUEST_GIFS', () => {
      expect(gifsReducer({isFetching: false, data:[]}, { type:'REQUEST_GIFS', query: '', offset:0, data:undefined}))
        .toEqual({
          isFetching: true, data:[]
        })
    })

    it('RECIEVE_GIFS', () => {
      let json = {
        data: [ 
          {
            id: 'id',
            images: []
          }]
      };
      expect(gifsReducer({isFetching: false, data:[]}, { type:'RECEIVE_GIFS', query: '', offset:0, data:json.data}))
        .toEqual({
          isFetching: false, data:json.data
        })
    })

  })

})