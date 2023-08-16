<template lang="">
  <div>{{ title }}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return "购物车案例";
      },
    },
  },
};
</script>
<style lang="less" scoped>
div {
  height: 60px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
