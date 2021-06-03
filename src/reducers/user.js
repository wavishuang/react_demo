import * as TYPES from "../actions/actionTypes.js";

const initialState = {
  name: 'jeff',
  user: {}
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
};

export default user;