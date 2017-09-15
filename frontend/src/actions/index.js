export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_POSTS = "SET_POSTS";
export const SET_COMMENTS = "SET_COMMENTS";

export function setCategories (categories) {
  return {
    type: SET_CATEGORIES,
    categories
  }
}

export function setPosts (posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function setComments (comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}