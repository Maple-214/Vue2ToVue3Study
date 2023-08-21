// http.js
import axios from "axios";
// 创建 Axios 实例
// console.log(process.env);

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置基础 URL
  timeout: 10000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么，比如添加 token 等
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

export default instance;
