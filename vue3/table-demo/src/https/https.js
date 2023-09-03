import axios from "axios";
import { ElLoading } from "element-plus";
console.log(process.env);
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
});

let loadingInstance;
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 全局loading
    loadingInstance = ElLoading.service({ fullscreen: true });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 相应拦截器
instance.interceptors.response.use(
  (response) => {
    loadingInstance.close();
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
