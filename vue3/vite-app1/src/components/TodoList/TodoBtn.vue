<template lang="">
  <div>
    <div class="btn-container todo-btn">
      <button
        type="button"
        class="btn btn-primary"
        @click="onActiveHandler(0)"
        :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        @click="onActiveHandler(1)"
        :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
      >
        完成
      </button>
      <button
        type="button"
        class="btn"
        @click="onActiveHandler(2)"
        :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
      >
        未完成
      </button>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["update:active"],
  props:["active"],
  // props: {
  //   active: {
  //     type: Number,
  //     default: 0,
  //     require: true,
  //   },
  // },
  methods: {
    // onActiveHandler(val) {
    //   if (val === this.active) return;
    //   this.$emit("onActiveHandler", val);
    // },
    onActiveHandler(val) {
      if (val === this.active) return;
      this.$emit("update:active", val);
    },
  },
};
</script>
<style lang="less">
.todo-btn {
  margin-top: 20px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
</style>
