import * as TYPES from "./actionTypes.js";

import { api_get_banner } from "../api/connect";

export const setBanner = bannerLists => ({
  type: TYPES.SET_BANNER,
  data: bannerLists
});

// 非同步
export const getBanner = (callback) => async (dispatch) => {
  const response = await api_get_banner();
  let result = {
    isLoad: true,
    message: ''
  }

  if(response && response.code) { // Response Error
    if(response.code === '0000') {
      result.data = response.result;
      if(callback) callback(response);
    } else {
      result.message = response.msg;
      if(callback) callback(response.msg);
    }
  } else {  // Call API Error
    result.message = response;
    callback(response);
  }

  dispatch(setBanner(result));
}
