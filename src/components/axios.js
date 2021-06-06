import _axios from "axios"



const lineloginUrl = `https://access.line.me/oauth2/v2.1/authorize
?response_type=code
&client_id=1655802816
&redirect_uri=https%3A%2F%2Fscript.google.com%2Fhome%2Fprojects%2F1FJZY46JvJtw25R5H3cP_gq7G9gJaE7-xkRhfdE08a070i4ZzKOoDLhZW
&state=jeffhuang
&scope=openid%20profile%20email`;

// post之前資料轉成string
var data = JSON.stringify({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
});
axios.post('GAS發佈後得到的網址', data)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

const axios = (baseURL) => {
  //建立一個自定義的axios
  const instance = _axios.create({
    baseURL: baseURL || 'http://localhost:5000', //JSON-Server端口位置
    timeout: 1000,
  });

  return instance;
}

export { axios };
export default axios();