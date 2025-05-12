import axios from 'axios';
// import { Message } from 'element-ui';

import { userStore } from '@/store/userStore';

// const url = 'https://test-api.guyantv.com/';
const url =
  process.env.VITE_USER_NODE_ENV === 'development'
    ? process.env.VITE_API_URL
    : process.env.VITE_API_URL;
// create an axios instance
const service = axios.create({
  baseURL: url, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  // responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    Accept: 'application/json;charset=UTF-8',
    Security: 'false',
  },
});

// request interceptor
service.interceptors.request.use(
  config => {
    const store = userStore();
    // 自定义baseURL
    config.baseURL = config.baseURL || url;

    if (config.dataType === 'json') {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
    if (config.dataType === 'text') {
      config.headers['Content-Type'] = 'text/plain';
    }
    config.headers.Authorization = store.token;
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 请求队列
service.interceptors.response.use(
  response => {
    // 对响应数据做处理，例如只返回data部分
    const res = response.data;
    // 如果返回的状态码为200，说明成功，可以直接返回数据
    if (res.code === 200) {
      return res.data;
    }
    // 其他状态码都当作错误处理
    // 可以在这里对不同的错误码进行不同处理
    return Promise.reject({
      message: res.message || 'Error',
      status: res.code,
    });
  },
  error => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000,
    // });
    console.log(error, 'error22');
    return Promise.reject(error);
  }
);

export default service;
