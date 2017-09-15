export const SET_COMMENTS = "SET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UP_VOTE_COMMENT = "UP_VOTE_COMMENT";
export const DOWN_VOTE_COMMENT = "DOWN_VOTE_COMMENT";

export function setComments (comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function addComment (post) {
  return {
    type: ADD_COMMENT,
    post
  }
}

export function editComment (commentId, changes) {
  return {
    type: EDIT_COMMENT,
    commentId,
    changes
  }
}

export function deleteComment (commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}

export function upVoteComment (commentId) {
  return {
    type: UP_VOTE_COMMENT,
    commentId
  }
}

export function downVoteComment (commentId) {
  return {
    type: DOWN_VOTE_COMMENT,
    commentId
  }
}