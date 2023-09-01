import axios from "axios";
console.log(process.env);
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 相应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance
