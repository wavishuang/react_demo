import * as TYPES from "./actionTypes.js";

export const productList = products => ({
  type: TYPES.SET_PRODUCTS,
  data: products
});

// 非同步
export const getProductList = () => async (dispatch) => {
  const response = await fetch('https://cc94178.com/index.php/Api/get_home_products', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  }).then((res) => {
    return res.json();
  });
  //const products = await response.json();
  console.log("response:", response);
  dispatch(productList(response.result));
}



