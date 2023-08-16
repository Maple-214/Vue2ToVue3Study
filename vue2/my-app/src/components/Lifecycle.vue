<template lang="">
  <div id="cycle">
    <p>cycle</p>
    <button @click="addHandler">{{ num }}</button>
  </div>
</template>
<script>
export default {
  props: {
    cycle: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      tex: "value",
      num: 0,
    };
  },
  // 创建阶段
  beforeCreate() {
    // 拿不到props，data，dom
    // console.log(this.tex,this.cycle,document.querySelector('#cycle'));
  },
  created() {
    // 拿得到props，data，拿不到dom
    // console.log(this.tex,this.cycle,document.querySelector('#cycle'));
  },
  beforeMount() {
    // 拿得到props，data，拿不到dom
    // console.log(this.tex,this.cycle,document.querySelector('#cycle'));
  },
  mounted() {
    // 拿得到props，data，拿得到dom
    // console.log(this.tex,this.cycle,document.querySelector('#cycle'));
  },
  // 运行阶段
  beforeUpdate(...arg) {
    // 状态更新前
    console.log("状态更新前：" + this.num);
  },
  updated(...arg) {
    console.log("状态更新后：" + this.num);
  },
  // 摧毁阶段
  beforeDestroy() {},
  destroyed() {},
  methods: {
    addHandler() {
      this.num++;
    },
  },
};
</script>
<style lang=""></style>
