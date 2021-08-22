const request_url = 'https://cc94178.com/index.php/Api/';

const fetchGet = (api_name) => {
  const response = fetch(request_url +'/'+ api_name, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then((res) => {
    return res.json();
  }).catch((error) => {
    return error;
  });

  return response;
}

/**
 * Method: GET
 */
// 取得 banner
export const api_get_banner = function() {
  const response = fetchGet('get_ad_banner');
  return response;
}
  