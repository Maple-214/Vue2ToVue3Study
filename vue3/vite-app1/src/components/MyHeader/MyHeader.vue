<template>
  <div
    class="hearder-container"
    :style="{ backgroundColor: bgColor, color: textColor }"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "header组件",
      validator(value) {
        // 自定义验证函数
        // return boolean
      },
    },
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.hearder-container {
  width: 100%;
  height: 45px;
  background-color: pink;
  text-align: center;
  line-height: 45px;
  position: fixed;
  top: 0px;
}
</style>
