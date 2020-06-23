import Amplify, { API } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { GiphyAPI, ActionTypes, ReceiveGifsAction, RequestGifsAction } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction, ActionCreator, Dispatch } from 'redux';
import { RootState } from './reducer';

const apiName = 'giphy';
const path = '/gifs'; 

Amplify.configure(awsconfig);

export const REQUEST_GIFS = 'REQUEST_GIFS'
function requestGifs(query: string): ActionTypes {
  return {
    type: REQUEST_GIFS,
    query
  }
}

export const RECEIVE_GIFS = 'RECEIVE_GIFS'
function receiveGifs(query: string, json: GiphyAPI): ActionTypes {
  return {
    type: RECEIVE_GIFS,
    query,
    data: json.data
  }
}

export function fetchGifs(query: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    console.log('dispatch requestGifs');
    dispatch(requestGifs(query))
    try {
      console.log("calling lambda")
      let response = await API.get(apiName, path, query ? {queryStringParameters: { q:query }} : undefined)
        
      console.log("response", response);
      dispatch(receiveGifs(query, response)) 
    } catch (e) {
      console.log(e)
    } 
     
  }
}

export const fetchGifsActionCreator: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Promise<ReceiveGifsAction>,
  // The type for the data within the last action
  {},
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  ReceiveGifsAction
>> = (query: string) => {
  return async (dispatch: Dispatch) => {
    const requestGifsAction: RequestGifsAction = {
      type: "REQUEST_GIFS",
      query: query
    };
    dispatch(requestGifsAction);
    const result = await API.get(apiName, path, query ? {queryStringParameters: { q:query }} : undefined)
    const receiveGifsAction: ReceiveGifsAction = {
      data: result.data,
      type: "RECEIVE_GIFS",
      query
    };
    return dispatch(receiveGifsAction);
  };
};
