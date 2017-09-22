import { createReducer, updateItemInArray, updateObject } from './reducerUtilities';
import { commentsActions } from '../actions';

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
  return state.filter((comment) => comment.commentId !== action.id);
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
  [commentsActions.SET_COMMENTS]: setComments,
  [commentsActions.ADD_COMMENT]: addComment,
  [commentsActions.EDIT_COMMENT]: editComment,
  [commentsActions.DELETE_COMMENT]: deleteComment,
  [commentsActions.UP_VOTE_COMMENT]: upVoteComment,
  [commentsActions.DOWN_VOTE_COMMENT]: downVoteComment
});