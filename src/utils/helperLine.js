import * as config from "./config.js";

// Step 1. 導向 Line 頁面，判斷是否登入，並取回 Line Code
export function getLineCode(clientState) {
  localStorage.removeItem('LineInfo');
  localStorage.removeItem('LineUserInfo');
  const lineAuthURL = 'https://access.line.me/oauth2/v2.1/authorize';
  const loginUrl = `${lineAuthURL}?response_type=code&client_id=${config.clientID}&redirect_uri=${config.redirectURI}&state=${clientState}&scope=openid%20profile%20email`;
  location.href = loginUrl;
}

// Step 2. 夾帶 Line 回傳的 code，獲取 id_token
export function getApiToken(code, callback=null) {
  console.log("======== code ========", code);
  const uri = 'https://api.line.me/oauth2/v2.1/token';
  fetch(uri, {
    method: 'post',
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${config.redirectURI}&client_id=${config.clientID}&client_secret=${config.clientSecret}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(res => {
    return res.json();   // 使用 json() 可以得到 json 物件
  }).then(result => {
    localStorage.setItem('lineInfo', JSON.stringify(result));
    if(callback) callback(result);
  });
}

// Step 3. 拿 id_token 呼 Social API，取到 user 的 name、picture、email
export function getLineUserInfo(idToken, callback=null) {
  const uri = 'https://api.line.me/oauth2/v2.1/verify';

  fetch(uri, {
    method: 'post',
    body: `id_token=${idToken}&client_id=${config.clientID}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(res => {
    return res.json();   // 使用 json() 可以得到 json 物件
  }).then(result => {
    localStorage.setItem('lineUserInfo', JSON.stringify(result));
    console.log(result);
    if(callback) callback(result);
  });
}
