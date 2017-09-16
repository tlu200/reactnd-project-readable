import { createReducer } from './reducerUtilities';
import { categoriesActions } from '../actions';

// Case reducer
function setCategories (state, action) {
  return action.categories;
}

export const categoryReducer = createReducer([], {
  [categoriesActions.SET_CATEGORIES]: setCategories
});