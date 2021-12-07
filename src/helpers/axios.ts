import axios from 'axios';
import { METRIX } from '.';

let token = '';

(async () => {
  let user: any = await METRIX.getData('user', 'object');
  if (user) {
    user = JSON.parse(user);
    token = user.token;
  }
})();

const HTTP = axios.create({
  baseURL: '',
});

HTTP.interceptors.request.use(request => {
  request.headers = {
    ...request.headers,
    authorization: token
  }
  return request;
});

export default HTTP;
