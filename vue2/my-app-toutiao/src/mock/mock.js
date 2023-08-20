// mockData.js
import Mock from "mockjs";

const rule1 = /\/api\/data\?*/;

Mock.mock(rule1, "get", {
  "list|10": [
    {
      "art_id|+1": 1,
      title: "@ctitle(10,40)",
      "comm_count|30-120": 1,
      pubdate: "@datetime('yyyy-MM-dd HH:mm:ss')",
      aut_name: "@cname",
      "is_top|0-1": 0,
      cover: {
        type: 3,
        images: [
          "http://toutiao.itheima.net/resources/images/89.jpg",
          "http://toutiao.itheima.net/resources/images/90.jpg",
          "http://toutiao.itheima.net/resources/images/82.jpg",
        ],
      },
    },
  ],
});
