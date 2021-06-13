import * as TYPES from "./actionTypes.js";

export const setLineUserInfo = lineUserInfo => {
  return {
    type: TYPES.SET_LINE_USER_INFO,
    data: lineUserInfo
  }
};