import * as API from '../utils/api';

export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const UP_VOTE_POST = "UP_VOTE_POST";
export const DOWN_VOTE_POST = "DOWN_VOTE_POST";

export function getPosts () {
  return dispatch => (
    API
      .getPosts()
      .then(posts => dispatch(setPosts(posts)))
  );
}

export function setPosts (posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function addPost (post) {
  return dispatch => (
    API
      .addPost(post)
      .then(post => dispatch({
        type: ADD_POST,
        post
      }))
  );
}

export function editPost (id, changes) {
  return {
    type: EDIT_POST,
    id,
    changes
  }
}

export function deletePost (id) {
  return dispatch => (
    API
      .deletePost(id)
      .then(post => dispatch({
        type: DELETE_POST,
        id
      }))
  );
}

export function upVotePost (id) {
  return dispatch => (
    API
      .votePost(id, true)
      .then(() => dispatch({
        type: UP_VOTE_POST,
        id
      }))
  );
}

export function downVotePost (id) {
  return dispatch => (
    API
      .votePost(id, true)
      .then(() => dispatch({
        type: DOWN_VOTE_POST,
        id
      }))
  );
}