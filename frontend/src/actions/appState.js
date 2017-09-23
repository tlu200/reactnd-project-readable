import {
  SET_POST_ORDER_BY,
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL,
  SET_COMMENT_FORM_AUTHOR,
  SET_COMMENT_FORM_BODY
} from './types';

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