import axios from 'axios';
import { message } from 'antd';

if (process.env.NODE_ENV == 'development') {
  // axios.defaults.baseURL = 'http://localhost:9000';
} else {
  axios.defaults.baseURL = 'https://www.bstcine.com';
}
// axios.defaults.baseURL = 'https://www.bstcine.com';
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.except_case_desc) {
        return Promise.reject(response.data.except_case_desc);
      }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error.message);
  },
);

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        message.error(err);
        reject(err);
      });
  });
}
export function get(url: string, params?: object) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        message.error(err);
        reject(err);
      });
  });
}
