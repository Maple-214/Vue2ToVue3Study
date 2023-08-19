import Vue from "vue";
import VueRouter from "vue-router";
import MyA from "@/components/hash-demo/my-a.vue";
import MyB from "@/components/hash-demo/my-b.vue";
import MyC from "@/components/hash-demo/my-c.vue";
import MyCA from "@/components/hash-demo/my-c-a.vue";
import MyCB from "@/components/hash-demo/my-c-b.vue";
import MyCC from "@/components/hash-demo/my-c-c.vue";
import Main from "@/components/router-next-demo/main.vue";
import Login from "@/components/router-next-demo/login.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/A" },
    { path: "/main", component: Main },
    { path: "/login", component: Login },
    {
      path: "/A",
      component: MyA,
      children: [
        // {
        //   path: "a",
        //   component: MyCA,
        // },
        {
          path: "",
          redirect: "a/1111" /*路由重定向*/,
        },
        {
          path: "a/:id" /*动态路由*/,
          component: MyCA,
          props: true /*开启props传参*/,
          // 禁用重复导航错误处理
        },
        {
          path: "b",
          component: MyCB,
        },
        {
          path: "c",
          component: MyCC,
        },
      ],
    },
    { path: "/B", component: MyB },
    { path: "/C", component: MyC },
  ],
});

// 全局前置守卫  https://v3.router.vuejs.org
router.beforeEach((to, from, next) => {
  // 简易登陆判断
  const authArr = ["/main"];
  if (authArr.includes(to.path)) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
  console.log({ to, from });
  next();
});
export default router;
