
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
  images: MediaTypes
}

interface MediaTypes {
  preview_webp: object,
  preview_gif: object,
  original: object
}

interface Image {
  url: string
}

export interface GifState { 
  isFetching: boolean,
  data: Array<object>
}

export type ActionTypes = RequestGifAction | ReceiveGifAction