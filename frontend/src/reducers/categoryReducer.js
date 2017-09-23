import { createReducer } from './reducerUtilities';
import { SET_CATEGORIES } from '../actions/types';

// Case reducer
function setCategories (state, action) {
  return action.categories;
}

export const categoryReducer = createReducer([], {
  [SET_CATEGORIES]: setCategories
});