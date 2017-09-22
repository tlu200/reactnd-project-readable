const apiBaseUrl = process.env.REACT_APP_BACKEND ? process.env.REACT_APP_BACKEND :  "http://localhost:3001";
const authToken = 'myAuthToken';
const headers = { 'Authorization': authToken, 'Content-Type': 'application/json' };
const defaultOptions = {
  headers,
};

if(process.env.REACT_APP_BACKEND) {
  defaultOptions.credentials = "include";
}

function createOption(additionalOptions) {
  return Object.assign({}, defaultOptions, additionalOptions);
}

export const getCategories = () => fetch(`${apiBaseUrl}/categories`, defaultOptions)
  .then((res) => res.json());

export const getPosts = (category) => {
  const url = category ? `${apiBaseUrl}/${category}/posts` : `${apiBaseUrl}/posts`;
  return fetch(url, defaultOptions)
    .then((res) => res.json())
};

export const getPost  = (id) => fetch(`${apiBaseUrl}/posts/${id}`, defaultOptions)
  .then((res) => res.json());

export const addPost = (post) => fetch(`${apiBaseUrl}/posts`, createOption({
  method: "POST",
  body: JSON.stringify(post),
})).then((res) => res.json());

export const editPost = (id, changes) => fetch(`${apiBaseUrl}/posts/${id}`, createOption({
  method: "PUT",
  body: JSON.stringify(changes),
})).then((res) => res.json());

export const deletePost = (id) => fetch(`${apiBaseUrl}/posts/${id}`, createOption({
  method: "DELETE"
})).then((res) => res.json());

export const votePost = (id, upVote) => fetch(`${apiBaseUrl}/posts/${id}`, createOption({
  method: "POST",
  body: upVote ? JSON.stringify({ option: "upVote" }) : JSON.stringify({ option : "downVote" }),
})).then((res) => res.json());

export const getCommentsByPost = (id) => fetch(`${apiBaseUrl}/posts/${id}/comments`, defaultOptions)
  .then((res) => res.json());

export const getComment = (commentId) => fetch(`${apiBaseUrl}/${commentId}`, defaultOptions)
  .then((res) => res.json());

export const addComment = (comment) => fetch(`${apiBaseUrl}/comments`, createOption({
  method: "POST",
  body: JSON.stringify(comment),
})).then((res) => res.json());

export const voteComment  = (commentId, upVote) => fetch(`${apiBaseUrl}/comments/${commentId}`, createOption({
  method: "POST",
  body: upVote ? JSON.stringify({ option: "upVote" }) : JSON.stringify({ option : "downVote" }),
})).then((res) => res.json());

export const editComment = (commentId, changes) => fetch(`${apiBaseUrl}/comments/${commentId}`, createOption({
  method: "PUT",
  body: JSON.stringify(changes),
})).then((res) => res.json());

export const deleteComment = (commentId) => fetch(`${apiBaseUrl}/comments/${commentId}`, createOption({
  method: "DELETE"
})).then((res) => res.json());