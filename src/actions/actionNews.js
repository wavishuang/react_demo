import * as TYPES from "./actionTypes.js";

export const addNews = news => (
  {
    type: TYPES.ADD_NEWS,
    payload: { news }
  }
);

export const deleteNews = id => (
  {
    type: TYPES.DELETE_NEWS,
    payload: { id }
  }
);