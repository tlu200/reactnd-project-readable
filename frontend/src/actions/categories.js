import * as API from '../utils/api';

export const SET_CATEGORIES = "SET_CATEGORIES";

export function getCategories () {
  return dispatch => (
    API
      .getCategories()
      .then(response => dispatch(setCategories(response.categories)))
  );
}
export function setCategories (categories) {
  return {
    type: SET_CATEGORIES,
    categories
  }
}