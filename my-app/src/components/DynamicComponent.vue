<template lang="">
  <div>
    <h2>动态组建</h2>
    <!-- 缓存组件，切换时不被销毁,只有被include包含的组件才会被缓存，exclude，排除，指定不需要被缓存的组件 -->
    <keep-alive include="">
        <!-- 动态组件 -->
        <component :is="isShow ? A : B"></component>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  activated(){
    // 当使用keep-alive时会激活这个生命周期(激活时)，组件被创建时，会同时调用creatde和这个，当重新激活只会激活actived不会激活creaed
  },
  deactivated(){
    // 当使用keep-alive时会激活这个生命周期(缓存时)

  }
};
</script>
<style lang=""></style>
