import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import rootReducers from "../reducers";

const logger = store => next => (action) => {
  const state = store.getState();
  console.log('此次執行的：', action);
  console.log("執行之前的 state：", state);

  const result = next(action); //next(store.dispatch(rootReducers.setNews));

  console.log("執行之後的 state：", store.getState());

  return result;
}

const store = createStore(
  combineReducers(rootReducers),
  applyMiddleware(thunk, logger)
);

export default store;