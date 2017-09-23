import { createReducer, updateItemInArray, updateObject } from './reducerUtilities';
import {
  SET_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT
} from '../actions/types';

function setComments (state, action) {
  return action.comments;
}

function addComment (state, action) {
  return state.concat(action.comment);
}

function editComment (state, action) {
  return updateItemInArray(state, action.commentId, comment => {
    return updateObject(comment, action.changes);
  });
}

function deleteComment (state, action) {
  return state.filter((comment) => comment.id !== action.commentId);
}

function upVoteComment (state, action) {
  return updateItemInArray(state, action.commentId, comment => {
    return updateObject(comment, { voteScore: comment.voteScore + 1})
  });
}

function downVoteComment (state, action) {
  return updateItemInArray(state, action.commentId, comment => {
    return updateObject(comment, { voteScore: comment.voteScore - 1})
  });
}

export const commentReducer = createReducer([], {
  [SET_COMMENTS]: setComments,
  [ADD_COMMENT]: addComment,
  [EDIT_COMMENT]: editComment,
  [DELETE_COMMENT]: deleteComment,
  [UP_VOTE_COMMENT]: upVoteComment,
  [DOWN_VOTE_COMMENT]: downVoteComment
});