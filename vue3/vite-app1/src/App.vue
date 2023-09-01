<template>
  <!-- 数组动态绑定样式 -->
  <!-- <div class="init" :class="[isA ? 'a' : 'b', isB ? 'b' : 'c']">
    hello vite-vue3
  </div> -->
  <!-- <MyHeader /> -->
  <div>
    <TodoInput @onSubmitHandler="onSubmitHandler" />
    <TodoList :list="list" />
    <!-- <TodoBtn @onActiveHandler="onActiveHandler" :active="active" /> -->
    <TodoBtn v-model:active="active" />
    <!-- <VModel/> -->
  </div>
</template>

<script>
// import MyHeader from "./components/MyHeader/MyHeader.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import TodoInput from "./components/TodoList/TodoInput.vue";
import TodoBtn from "./components/TodoList/TodoBtn.vue";
import VModel from "./components/VModel/VModel.vue";

export default {
  name: "App",
  components: {
    // MyHeader,
    TodoList,
    TodoInput,
    TodoBtn,
    VModel
  },
  data() {
    return {
      todoList: [
        { id: 1, task: "我是任务1", done: false },
        { id: 2, task: "我是任务2", done: false },
        { id: 3, task: "我是任务3", done: true },
        { id: 4, task: "我是任务4", done: false },
      ],
      active: 0,
    };
  },
  methods: {
    onSubmitHandler(val) {
      this.todoList.push({
        id: "id_" + Math.random() * 10,
        task: val,
        done: false,
      });
      console.log(val);
    },
    onActiveHandler(val) {
      this.active = val;
    },
  },
  computed: {
    list() {
      switch (this.active) {
        case 0:
          return this.todoList;
        case 1:
          return this.todoList.filter((i) => i.done === true);
        case 2:
          return this.todoList.filter((i) => i.done !== true);
        default:
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
