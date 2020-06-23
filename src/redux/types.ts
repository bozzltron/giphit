export const REQUEST_GIFS = 'REQUEST_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'

export interface  RequestGifsAction {
  type: typeof REQUEST_GIFS,
  query: string
}

export interface  ReceiveGifsAction {
  type: typeof RECEIVE_GIFS,
  query: string,
  data: object
}

export interface ResponseState { 
  isFetching: boolean,
  data: Array<object>
}

export interface GiphyAPI {
  data: Array<Gif>
}

export interface Gif {
  images: MediaTypes
}

export interface MediaTypes {
  preview: Video,
  original_mp4: Video
}

export interface Video {
  height: string,
  mp4: string,
  width: string
}

export type ActionTypes = RequestGifsAction | ReceiveGifsAction