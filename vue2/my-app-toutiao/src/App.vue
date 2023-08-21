<template lang="">
  <div>
    <van-nav-bar title="标题" fixed />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },

  components: {},
};
</script>
<style lang=""></style>
