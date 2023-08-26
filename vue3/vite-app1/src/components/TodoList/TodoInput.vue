<template lang="">
  <div class="input-group mb">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">任务</span>
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Username"
      aria-describedby="basic-addon1"
      v-model="task"
    />
    <div @click="onSubmitHandler" class="input-group-append bt-add">
      <span class="input-group-text" id="basic-addon2">添加</span>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["onSubmitHandler"],
  data() {
    return {
      task: "",
    };
  },
  methods: {
    onSubmitHandler() {
      if (!this.task) return alert('内容不能为空！！');
      this.$emit("onSubmitHandler", this.task);
      this.task = "";
    //   console.log(this.task);
    },
  },
};
</script>
<style lang="less">
.mb {
  width: 400px;
  margin-bottom: 20px;
}
.bt-add {
  cursor: pointer;
}
</style>
