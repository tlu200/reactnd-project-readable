import { createReducer, updateItemInArray, updateObject } from './reducerUtilities';
import { postsActions } from '../actions';

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
  return state.filter((post) => post.id != action.id);
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
  [postsActions.SET_POSTS]: setPosts,
  [postsActions.ADD_POST]: addPost,
  [postsActions.EDIT_POST]: editPost,
  [postsActions.DELETE_POST]: deletePost,
  [postsActions.UP_VOTE_POST]: upVotePost,
  [postsActions.DOWN_VOTE_POST]: downVotePost
});