import Amplify, { API } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { GiphyAPI, ActionTypes } from './types';
import { ThunkAction } from 'redux-thunk'
import { ActionCreator, Dispatch } from 'redux';

const apiName = 'giphy';
const path = '/gifs'; 

Amplify.configure(awsconfig);

export const REQUEST_GIFS = 'REQUEST_GIFS'
function requestGifs(query: string, offset: number): ActionTypes {
  return {
    type: REQUEST_GIFS,
    query,
    offset
  }
}

export const RECEIVE_GIFS = 'RECEIVE_GIFS'
function receiveGifs(query: string, offset: number, json: GiphyAPI): ActionTypes {
  return {
    type: RECEIVE_GIFS,
    query,
    offset,
    data: json.data
  }
}

export const fetchGifsActionCreator: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Promise<ActionTypes>,
  // The type for the data within the last action
  {},
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  ActionTypes
>> = (query: string, offset: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestGifs(query, offset));
    console.log("offset", offset)
    const result = await API.get(apiName, path, (query || offset) ? {queryStringParameters: { q:query, offset: offset }} : undefined)
    return dispatch(receiveGifs(query, offset, result));
  };
};
