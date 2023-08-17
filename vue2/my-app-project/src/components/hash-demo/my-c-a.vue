<template lang="">
  <div>
    <h2>a</h2>
    <!-- 获取动态路由参数 -->
    <p>{{ this.$route.params }}</p>
    <!-- 路由props传参 -->
    <p>{{ id }}</p>
  </div>
</template>
<script>
/**
 * this.$route 是路由参数对象
 * this.$router 是路由导航对象
 *
 *
 */
export default {
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style lang=""></style>
