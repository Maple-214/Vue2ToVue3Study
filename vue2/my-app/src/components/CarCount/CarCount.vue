<template lang="">
  <div class="car_count_container">
    <button @click="subHandler" class="left">-</button>
    <span>{{ goodsCount }}</span>
    <button @click="addHandler" class="right">+</button>
  </div>
</template>
<script>
export default {
  props: {
    goodsCount: {
      type: Number,
      require: true,
    },
    id: {
      type: Number,
      require: true,
    },
  },
  methods: {
    addHandler() {
      this.$bus.$emit("addHandler", this.id);
    },
    subHandler() {
      if (this.goodsCount - 1 === 0) return;
      this.$bus.$emit("subHandler", this.id);
    },
  },
};
</script>
<style lang="less">
.car_count_container {
  button {
    width: 25px;
    height: 25px;
  }
  span {
    margin: 0 4px;
  }
}
</style>
