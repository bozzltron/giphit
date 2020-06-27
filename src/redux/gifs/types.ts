
interface RequestGifAction {
  type: string,
  query: string,
  offset: number,
  data?: Array<Gif>
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
  data: Array<Gif>
}

export type ActionTypes = RequestGifAction | ReceiveGifAction