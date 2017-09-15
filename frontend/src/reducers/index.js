import { combineReducers } from 'redux';

import {
  SET_CATEGORIES,
  SET_POSTS,
  SET_COMMENTS
} from '../actions';

function categories (state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.state;
    default:
      return state;
  }
}

function posts (state = [], action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    default:
      return state;
  }
}

function comments (state = [], action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});