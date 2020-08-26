/* 封装axios请求 */

import axios from 'axios' //引入axios请求

const request = axios.create({
  // baseURL: 'http://localhost:2003/api',   //请求接口的地址
  baseURL: '/',
  timeout: 3000,   //请求超时时间，如果3秒还没拿到数据就断开
});

export default request;