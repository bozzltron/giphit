
interface RequestGifAction {
  type: string,
  query: string,
  offset: number,
  data: undefined
}

interface ReceiveGifAction {
  type: string,
  query: string,
  offset: number,
  data: Array<Gif>
}

export interface Gif {
  id: string,
  images: object,
}

export interface GifState { 
  isFetching: boolean,
  data: Array<object>
}

export type ActionTypes = RequestGifAction | ReceiveGifAction