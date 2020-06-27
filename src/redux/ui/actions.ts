import { ActionTypes } from './types';

export const SHOW_ORIGINAL = 'SHOW_ORIGINAL';

export const showOriginal = (id: string): ActionTypes => ({
  type: SHOW_ORIGINAL,
  id
});
