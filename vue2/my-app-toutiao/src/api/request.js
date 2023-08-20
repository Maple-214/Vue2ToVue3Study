// api.js
import http from "@/https/https.js"; // 导入刚刚创建的 Axios 实例

export function fethArticle(params) {
  return http.get("/api/data", { params });
}

// 其他 API 请求方法类似
