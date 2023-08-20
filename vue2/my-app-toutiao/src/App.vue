<template lang="">
  <div>
    <router-view />

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

  components: {},
};
</script>
<style lang=""></style>
