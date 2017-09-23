import { createReducer, updateItemInArray, updateObject } from './reducerUtilities';
import {
  SET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST
} from '../actions/types';

function setPosts (state, action) {
  return action.posts;
}

function addPost (state, action) {
  return state.concat(action.post);
}

function editPost (state, action) {
  return updateItemInArray(state, action.id, post => {
    return updateObject(post, action.changes);
  });
}

function deletePost (state, action) {
  return state.filter((post) => post.id !== action.id);
}

function upVotePost (state, action) {
  return updateItemInArray(state, action.id, post => {
    return updateObject(post, { voteScore: post.voteScore + 1})
  });
}

function downVotePost (state, action) {
  return updateItemInArray(state, action.id, post => {
    return updateObject(post, { voteScore: post.voteScore - 1})
  });
}

export const postReducer = createReducer([], {
  [SET_POSTS]: setPosts,
  [ADD_POST]: addPost,
  [EDIT_POST]: editPost,
  [DELETE_POST]: deletePost,
  [UP_VOTE_POST]: upVotePost,
  [DOWN_VOTE_POST]: downVotePost
});