import Vue from "vue";
import VueRouter from "vue-router";
import MyA from "@/components/hash-demo/my-a.vue";
import MyB from "@/components/hash-demo/my-b.vue";
import MyC from "@/components/hash-demo/my-c.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/A", component: MyA },
    { path: "/B", component: MyB },
    { path: "/C", component: MyC },
  ],
});
export default router;
