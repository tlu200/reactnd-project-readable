import * as API from '../utils/api';

export const SET_COMMENTS = "SET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UP_VOTE_COMMENT = "UP_VOTE_COMMENT";
export const DOWN_VOTE_COMMENT = "DOWN_VOTE_COMMENT";

export function getCommentsByPost (postId) {
  return dispatch => (
    API
      .getCommentsByPost(postId)
      .then(comments => dispatch(setComments(comments)))
  );
}

export function setComments (comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function addComment (comment) {
  return dispatch => (
    API
      .addComment(comment)
      .then(comment => dispatch({
        type: ADD_COMMENT,
        comment
      }))
  );
}

export function editComment (commentId, changes) {
  return dispatch => (
    API
      .editComment(commentId, changes)
      .then(comment => dispatch({
        type: EDIT_COMMENT,
        commentId,
        changes
      }))
  );
}

export function deleteComment (commentId) {
  return dispatch => (
    API
      .deleteComment(commentId)
      .then(comment => dispatch({
        type: DELETE_COMMENT,
        commentId
      }))
  );
}

export function upVoteComment (commentId) {
  return dispatch => (
    API
      .voteComment(commentId, true)
      .then(() => dispatch({
        type: UP_VOTE_COMMENT,
        commentId
      }))
  );
}

export function downVoteComment (commentId) {
  return dispatch => (
    API
      .voteComment(commentId, false)
      .then(() => dispatch({
        type: DOWN_VOTE_COMMENT,
        commentId
      }))
  );
}