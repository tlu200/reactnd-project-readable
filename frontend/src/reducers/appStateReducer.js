import { createReducer, updateObject } from './reducerUtilities';
import {
  SET_POST_ORDER_BY,
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL,
  SET_COMMENT_FORM_AUTHOR,
  SET_COMMENT_FORM_BODY
} from '../actions/types';

const initialState = {
  postOrderBy: 'timestamp',
  showCommentModal: false,
  commentFormAuthor: "",
  commentFormBody: "",
  commentFormId: "",
  commentFormParentId: ""
};

function setPostOrderBy (state, action) {
  return updateObject(state, { postOrderBy: action.postOrderBy });
}

function openCommentModal (state, action) {
  const { comment = {} } = action;
  return updateObject(state, {
    showCommentModal: true,
    commentFormAuthor: comment.author ? comment.author: "",
    commentFormBody: comment.body ? comment.body: "",
    commentFormId: comment.id ? comment.id: "",
    commentFormParentId: comment.parentId ? comment.parentId : ""
  });
}

function closeCommentModal (state) {
  return updateObject(state, {
    showCommentModal: false,
    commentFormAuthor: "",
    commentFormBody: "",
    commentFormId: "",
    commentFormParentId: ""
  });
}

function setCommentFormAuthor (state, action) {
  return updateObject(state, { commentFormAuthor: action.author});
}

function setCommentFormBody (state, action) {
  return updateObject(state, { commentFormBody: action.body});
}

export const appStateReducer = createReducer(initialState, {
  [SET_POST_ORDER_BY]: setPostOrderBy,
  [OPEN_COMMENT_MODAL]: openCommentModal,
  [CLOSE_COMMENT_MODAL]: closeCommentModal,
  [SET_COMMENT_FORM_AUTHOR]: setCommentFormAuthor,
  [SET_COMMENT_FORM_BODY]: setCommentFormBody
});