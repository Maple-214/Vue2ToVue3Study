// mockData.js
import Mock from "mockjs";

const rule1 = /\/api\/goods\?*/;

Mock.mock(rule1, "get", {
  "list|10": [
    {
      "id|+1": 1,
      title: "@ctitle(10,40)",
      "comm_count|30-120": 1,
      pubdate: "@datetime('yyyy-MM-dd HH:mm:ss')",
      goods_name: "@cname",
      tags: ['tag1','tag2'],
      "goods_price|100-1000": 1,
      "ipt_visible":false,
      "ipt_value":"",
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
  code: 200,
  message: "success",
});
