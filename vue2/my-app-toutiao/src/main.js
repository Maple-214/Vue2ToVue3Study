import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "@/mock/mock.js";
import "vant/lib/index.less";
import axios from "axios";

Vue.prototype.$http = axios;
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
