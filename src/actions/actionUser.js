import * as TYPES from "./actionTypes.js";

export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user }
});

export const fetchUser = () => async (dispatch) => {
  const response = await fetch('http://httpbin.org/get');
  const user = await response.json();
  console.log("user:", user);
  dispatch(setUser(user));
}