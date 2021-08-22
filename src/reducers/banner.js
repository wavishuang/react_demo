import * as TYPES from "../actions/actionTypes.js";

const banner = (state = {}, action) => {
  switch(action.type) {
    case TYPES.SET_BANNER:
      return action.data;
    default:
      return state;
  }
}

export default banner;