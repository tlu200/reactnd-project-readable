import * as API from '../utils/api';
import { SET_CATEGORIES } from './types';

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