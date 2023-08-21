import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { isRecord: true, top: 0, keepAlive: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Home/home.vue"),
  },
  {
    path: "/user",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/User/user.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 组件切换保留原先滚动位置
    console.log({ to, from, savedPosition });
    // return 期望滚动到的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: to.meta.top || 0 };
    }
  },
});

export default router;
