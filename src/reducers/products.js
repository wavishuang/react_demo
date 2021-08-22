import * as TYPES from "../actions/actionTypes.js";

const products = (state = {}, action) => {
  switch(action.type) {
    case TYPES.SET_PRODUCTS:
      return action.data;
    default:
      return state;
  }
}

export default products;