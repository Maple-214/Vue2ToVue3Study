<template>
  <!-- 数组动态绑定样式 -->
  <!-- <div class="init" :class="[isA ? 'a' : 'b', isB ? 'b' : 'c']">
    hello vite-vue3
  </div> -->
  <!-- <MyHeader /> -->
  <TodoList />
</template>

<script>
// import MyHeader from "./components/MyHeader/MyHeader.vue";
import TodoList from "./components/TodoList/TodoList.vue";

export default {
  name: "App",
  components: {
    // MyHeader,
    TodoList,
  },
};
</script>
<style lang="less" scoped></style>
