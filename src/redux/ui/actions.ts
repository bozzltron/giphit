import { ActionTypes } from './types';

export const SHOW_ORIGINAL = 'SHOW_ORIGINAL';
export const QUERY = 'QUERY';
export const OFFSET = 'OFFSET';

export const setShowOriginal = (id: string): ActionTypes => ({
  type: SHOW_ORIGINAL,
  id
});

export const setQuery = (query: string): ActionTypes => ({
  type: QUERY,
  query
});

export const setOffset = (offset: number): ActionTypes => ({
  type: OFFSET,
  offset
});


