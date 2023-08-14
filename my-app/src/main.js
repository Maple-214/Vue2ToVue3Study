import Vue from 'vue'
import App from './App.vue'
import Top from '@/components/Top.vue'

// 注册EventBus
Vue.prototype.$bus = new Vue()

//方式二
// window.$bus = new Vue();

Vue.config.productionTip = false
// 全局组件
// Vue.component('Top',Top)

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  render: h => h(App),
})