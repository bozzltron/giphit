import Amplify, { API } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import { ActionTypes, Gif } from './types';
import { Dispatch } from 'redux';

const apiName = 'giphy';
const path = '/gifs'; 

Amplify.configure(awsconfig);

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const RECEIVE_GIFS = 'RECEIVE_GIFS';

const requestGifs = (query: string, offset: number): ActionTypes => ({
  type: REQUEST_GIFS,
  query,
  offset,
  data: undefined
});

const receiveGifs = (query: string, offset: number, data: Array<Gif>): ActionTypes => ({
  type: RECEIVE_GIFS,
  query,
  offset,
  data
});

export const getGifs = (query: string, offset: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestGifs(query, offset))
    let data = await API.get(apiName, path, (query || offset) ? {queryStringParameters: { q:query, offset: offset }} : undefined)
    dispatch(receiveGifs(query, offset, data.data));
  }
}