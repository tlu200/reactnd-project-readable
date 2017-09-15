export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const UP_VOTE_POST = "UP_VOTE_POST";
export const DOWN_VOTE_POST = "DOWN_VOTE_POST";

export function setPosts (posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export function editPost (id, changes) {
  return {
    type: EDIT_POST,
    id,
    changes
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function upVotePost (id) {
  return {
    type: UP_VOTE_POST,
    id
  }
}

export function downVotePost (id) {
  return {
    type: DOWN_VOTE_POST,
    id
  }
}