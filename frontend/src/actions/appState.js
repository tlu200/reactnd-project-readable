export const SET_POST_ORDER_BY = "SET_POST_ORDER_BY";

export function setPostOrderBy (postOrderBy) {
  return {
    type: SET_POST_ORDER_BY,
    postOrderBy
  }
}