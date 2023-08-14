<template lang="">
  <div>
    <div>全局组件</div>
    <h2>{{ title }}</h2>
    <h2 class="title">{{ initTitle }}</h2>
    <button @click="changeTitleHandler">改变title</button>
  </div>
</template>
<script>
export default {
  // 接受父组件传过来的值，附带定义了没值时候的默认值和值类型，并且require验证
  props: {
    title: {
      default: "default",
      type: String,
      require: true,
    },
  },
  data() {
    return {
      initTitle: this.title,
    };
  },
  methods: {
    changeTitleHandler() {
      this.initTitle = "改变";

      this.$bus.$emit('onBrother',this.initTitle)
      // 方式2
      // $bus.$emit('onBrother',this.initTitle)
    },
  },
};
</script>
<!-- scoped 防止 样式冲突  /deep/ 样式穿透-->
<!-- css可以使用>>>，/deep/，::v-deep
less和node-sass可以使用/deep/，::v-deep
dart-sass可以使用::v-deep -->
<style lang="less" scoped>
/deep/ .title {
  color: rebeccapurple;
}
</style>
