import { combineReducers } from 'redux';

import {
  categoriesActions,
  postsActions,
  commentsActions
} from '../actions';

function categories (state = [], action) {
  switch (action.type) {
    case categoriesActions.SET_CATEGORIES:
      return action.state;
    default:
      return state;
  }
}

function posts (state = [], action) {
  switch (action.type) {
    case postsActions.SET_POSTS:
      return action.posts;
    default:
      return state;
  }
}

function comments (state = [], action) {
  switch (action.type) {
    case commentsActions.SET_COMMENTS:
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