import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../components/Home/Home.vue"),
  },
  {
    path: "/movie",
    component: () => import("../components/Movie/Movie.vue"),
  },
  {
    path: "/about",
    component: () => import("../components/About/About.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
