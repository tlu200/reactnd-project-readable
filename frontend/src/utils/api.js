const apiBaseUrl = "http://localhost:3001";
const authToken = 'myAuthToken';
const headers = { 'Authorization': authToken, 'Content-Type': 'application/json' };

export const getCategories = () => fetch(`${apiBaseUrl}/categories`, { headers })
  .then((res) => res.json());

export const getPosts = (category) => {
  const url = category ? `${apiBaseUrl}/${category}/posts` : `${apiBaseUrl}/posts`;
  return fetch(url, { headers })
    .then((res) => res.json())
};

export const getPost  = (id) => fetch(`${apiBaseUrl}/posts/${id}`, { headers })
  .then((res) => res.json());

export const addPost = (post) => fetch(`${apiBaseUrl}/posts`, {
  method: "POST",
  body: JSON.stringify(post),
  headers
}).then((res) => res.json());

export const editPost = (id, changes) => fetch(`${apiBaseUrl}/posts/${id}`, {
  method: "PUT",
  body: JSON.stringify(changes),
  headers
}).then((res) => res.json());

export const deletePost = (id) => fetch(`${apiBaseUrl}/posts/${id}`, {
  method: "DELETE",
  headers
}).then((res) => res.json());

export const votePost = (id, upVote) => fetch(`${apiBaseUrl}/posts/${id}`, {
  method: "POST",
  body: upVote ? "upVote" : "downVote",
  headers
}).then((res) => res.json());

export const getCommentsByPost = (id) => fetch(`${apiBaseUrl}/posts/${id}/comments`, { headers })
  .then((res) => res.json());

export const getComment = (commentId) => fetch(`${apiBaseUrl}/${commentId}`, { headers })
  .then((res) => res.json());

export const addComment = (id, comment) => fetch(`${apiBaseUrl}/comments`, {
  method: "POST",
  body: JSON.stringify(comment),
  headers
});

export const voteComment  = (commentId, upVote) => fetch(`${apiBaseUrl}/comments/${commentId}`, {
  method: "POST",
  body: upVote ? "upVote" : "downVote",
  headers
}).then((res) => res.json());

export const editComment = (commentId, changes) => fetch(`${apiBaseUrl}/comments/${commentId}`, {
  method: "PUT",
  body: JSON.stringify(changes),
  headers
}).then((res) => res.json());

export const deleteComment = (commentId) => fetch(`${apiBaseUrl}/comments/${commentId}`, {
  method: "DELETE",
  headers
}).then((res) => res.json());