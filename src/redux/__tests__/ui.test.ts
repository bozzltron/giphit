import {uiReducer} from '../ui/reducer'

describe('gif', () => {

  describe('reducer', () => {

    it('SHOW_ORIGINAL', () => {
      expect(uiReducer({showOriginalId: ''}, { type:'SHOW_ORIGINAL', id: 'test'}))
        .toEqual({
          showOriginalId: 'test'
        })
    })

  })

})