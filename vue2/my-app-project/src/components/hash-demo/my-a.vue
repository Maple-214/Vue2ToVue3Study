<template lang="">
  <div>
    <h2>A</h2>
    <div class="A">
      <!-- params路径参数 -->
      <router-link to="/A/a/12345">A-a</router-link>
      <!-- query查询参数 -->
      <router-link to="/A/b?id=3333">A-b</router-link>
      <router-link to="/A/c">A-c</router-link>
    </div>
    <button @click="pushHadnler">跳转a</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  /**
   * 标签跳转 -> 声明式导航
   * 方法跳转 -> 编程式导航  在行内使用编程式导航this需要省略
   * push 浏览器新增一条历史记录  replace 跳转不新增记录 go(数值) -1 为后退  超过后退的历史记录条数则不会有变化
   * go(-1) 快捷方法 $router.back() 前进 $router.forward()
   *
   *
   */
  methods: {
    pushHadnler() {
      this.$router.push("/A/a/12345");
    },
  },
};
</script>
<style lang="less">
a,
.A {
  width: 200px;
  height: 200px;
  background: red;
}
.A {
  margin-top: 20px;
  display: flex;
}
</style>
