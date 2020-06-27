import {gifsReducer} from '../gifs/reducer'
import {API} from 'aws-amplify'
import { getGifs } from '../gifs/actions'

describe('gif', () => {

  describe('reducer', () => {

    it('REQUEST_GIFS', () => {
      expect(gifsReducer({isFetching: false, data:[]}, { type:'REQUEST_GIFS', query: '', offset:0, data:undefined}))
        .toEqual({
          isFetching: true, data:[]
        })
    })

    it('REQUEST_GIFS should clear data if offset is 0', () => {
      expect(gifsReducer({isFetching: false, data:[{}]}, { type:'REQUEST_GIFS', query: '', offset:0, data:undefined}))
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

  describe('actions', () => {

    it('getGifs - initial load', async () => {
      let dispatch = jest.fn();
      let spy = jest
          .spyOn(API, 'get')
          .mockResolvedValue({ data: [] })
      await getGifs('', 0)(dispatch);
      expect(spy).toHaveBeenCalledWith('giphy', '/gifs', undefined)
    })

    it('getGifs - search', async () => {
      let dispatch = jest.fn();
      let spy = jest
          .spyOn(API, 'get')
          .mockResolvedValue({ data: [] })
      await getGifs('tiger', 25)(dispatch);
      expect(spy).toHaveBeenCalledWith('giphy', '/gifs', {queryStringParameters:{q: 'tiger', offset:25}})
    })
  })

})