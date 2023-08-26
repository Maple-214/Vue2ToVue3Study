<template lang="">
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="i in list"
        :key="i.id"
      >
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            v-model="i.done"
            :id="i.id"
          />
          <label
            class="custom-control-label"
            :class="i.done ? 'delete' : ''"
            :for="i.id"
            >{{ i.task }}</label
          >
        </div>
        <span v-if="i.done" class="badge badge-success badge-pill">完成</span>
        <span v-else class="badge badge-warning badge-pill">未完成</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      defaulu: [],
      require: true,
    },
  },
};
</script>
<style lang="less">
.list-group {
  width: 400px;
}
.delete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>
