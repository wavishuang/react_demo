import * as TYPES from "./actionTypes.js";

export const setNews = () => {
  let news = [];

  setTimeout(() => {
    news = [{id: 6, title:'fetchNews', describe: 'fetchNews'}]
  }, 2000);

  return { 
    type: TYPES.SET_NEWS,
    payload: { news }
  }
};

export const addNews = news => ({
  type: TYPES.ADD_NEWS,
  payload: { news }
});

export const deleteNews = id => ({
  type: TYPES.DELETE_NEWS,
  payload: { id }
});