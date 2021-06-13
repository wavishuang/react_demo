import * as TYPES from "../actions/actionTypes.js";

const auth = (state = {}, action) => {
  switch(action.type) {
    case TYPES.SET_LINE_USER_INFO:
      return action.data;
    default:
      return state;
  }
};

export default auth;