import {uiReducer} from '../ui/reducer'

describe('gif', () => {

  describe('reducer', () => {

    it('SHOW_ORIGINAL', () => {
      expect(uiReducer({showOriginalId: '', query: '', offset: 0, useWebp: false}, { type:'SHOW_ORIGINAL', id: 'test'}))
        .toEqual({
          showOriginalId: 'test',
          query: '',
          offset: 0
        })
    })

    it('QUERY', () => {
      expect(uiReducer({showOriginalId: '', query: '', offset: 0, useWebp: false}, { type:'QUERY', query: 'test'}))
        .toEqual({
          showOriginalId: '',
          query: 'test',
          offset: 0
        })
    })

    it('OFFSET', () => {
      expect(uiReducer({showOriginalId: '', query: '', offset: 0, , useWebp: false}, { type:'OFFSET', offset: 25}))
        .toEqual({
          showOriginalId: '',
          query: '',
          offset: 25
        })
    })

    it('USE_WEBP', () => {
      expect(uiReducer({showOriginalId: '', query: '', offset: 0, useWebp: false}, { type:'USE_WEBP', useWebp: true}))
        .toEqual({
          showOriginalId: '',
          query: '',
          offset: 25,
          useWebp: true
        })
    })

  })

})