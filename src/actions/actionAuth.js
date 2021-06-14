import * as TYPES from "./actionTypes.js";

export const setLineUserInfo = lineUserInfo => {
  return {
    type: TYPES.SET_LINE_USER_INFO,
    data: lineUserInfo
  }
};

export const clearLineUser = () => {
  return {
    type: TYPES.CLEAR_LINE_USER
  }
}