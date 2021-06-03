import * as TYPES from "../actions/actionTypes.js";

const initialState = {
  news: [
    {id: 1, title:'第一條消息', describe: '這是第一條'},
    {id: 2, title:'第二條消息', describe: '這是第二條'},
    {id: 3, title:'第三條消息', describe: '這是第三條'}
  ]
};

const news = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.ADD_NEWS: // 新增最新消息
      return {
        ...state,
        news: [
          ...state.news,
          action.payload.news
        ]
      };
    case TYPES.DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter(theNews => theNews.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default news;