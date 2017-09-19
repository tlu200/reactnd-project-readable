import { createReducer, updateObject } from './reducerUtilities';
import { appStateActions } from '../actions';

const initialState = {
  postOrderBy: 'timestamp'
};

function setPostOrderBy (state, action) {
  return updateObject(state, { postOrderBy: action.postOrderBy });
}

export const appStateReducer = createReducer(initialState, {
  [appStateActions.SET_POST_ORDER_BY]: setPostOrderBy
});