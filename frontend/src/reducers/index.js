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

function posts (state = {}, action) {
  switch (action.type) {
    case postsActions.SET_POSTS:
      const { posts } = action;
      return posts.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, {});
    case postsActions.ADD_POST:
      const { post } = action;
      return Object.assign({}, state, {
        [post.id]: post
      });
    case postsActions.EDIT_POST:
      const { id, changes } = action;
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          ...changes
        }
      });
    case postsActions.DELETE_POST:
      const { id } = action;
      const newState = Object.create(state);
      delete newState[id];
      return newState;
    case postsActions.UP_VOTE_POST:
      const { id } = action;
      const newState = Object.assign({}, state);
      newState[id].voteScore++;
      return newState;
    case postsActions.DOWN_VOTE_POST:
      const { id } = action;
      const newState = Object.assign({}, state);
      newState[id].voteScore--;
      return newState;
    default:
      return state;
  }
}

function comments (state = {}, action) {
  switch (action.type) {
    case commentsActions.SET_COMMENTS:
      const { comments } = action;
      return comments.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, {});
    case commentsActions.ADD_COMMENT:
      const { comment } = action;
      return Object.assign({}, state, {
        [comment.id]: comment
      });
    case commentsActions.EDIT_COMMENT:
      const { id, changes } = action;
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          ...changes
        }
      });
    case commentsActions.DELETE_COMMENT:
      const { id } = action;
      const newState = Object.create(state);
      delete newState[id];
      return newState;
    case commentsActions.UP_VOTE_COMMENT:
      const { id } = action;
      const newState = Object.assign({}, state);
      newState[id].voteScore++;
      return newState;
    case commentsActions.DOWN_VOTE_COMMENT:
      const { id } = action;
      const newState = Object.assign({}, state);
      newState[id].voteScore--;
      return newState;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});