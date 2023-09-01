<template lang="">
  <table class="table table-bordered table-striped">
    <!-- 标题区域 -->
    <thead>
      <tr>
        <slot name="THeader"></slot>
      </tr>
    </thead>
    <!-- 内容主体区域 -->
    <tbody>
      <tr v-for="(i,index ) in data" :key="i.id">
        <slot name="TBody" :row="i" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      require: true,
      default: [],
    },
  },
};
</script>
<style lang="less" scoped></style>
