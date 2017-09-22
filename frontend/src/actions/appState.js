export const SET_POST_ORDER_BY = "SET_POST_ORDER_BY";
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL";
export const CLOSE_COMMENT_MODAL = "CLOSE_COMMENT_MODAL";
export const SET_COMMENT_FORM_AUTHOR = "SET_COMMENT_FORM_AUTHOR";
export const SET_COMMENT_FORM_BODY = "SET_COMMENT_FORM_BODY";

export function setPostOrderBy (postOrderBy) {
  return {
    type: SET_POST_ORDER_BY,
    postOrderBy
  }
}

export function openCommentModal (comment) {
  return {
    type: OPEN_COMMENT_MODAL,
    comment
  }
}

export function closeCommentModal () {
  return {
    type: CLOSE_COMMENT_MODAL
  }
}

export function setCommentFormAuthor (author) {
  return {
    type: SET_COMMENT_FORM_AUTHOR,
    author
  }
}

export function setCommentFormBody (body) {
  return {
    type: SET_COMMENT_FORM_BODY,
    body
  }
}