<template lang="">
  <div>
    <div class="container">
      <a href="#/a">a</a>
      <a href="#/b">b</a>
      <a href="#/c">c</a>
    </div>
    <!-- <component :is="MyComponent"></component> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import MyA from "./components/hash-demo/my-a.vue";
// import MyB from "./components/hash-demo/my-b.vue";
// import MyC from "./components/hash-demo/my-c.vue";

export default {
  components: {
    // MyA,
    // MyB,
    // MyC,
  },
  data() {
    return {
      MyComponent: "MyA",
    };
  },
  created() {
    // window.onhashchange = this.hashChangeHandler;
  },
  methods: {
    hashChangeHandler() {
      switch (location.hash) {
        case "#/a":
          this.MyComponent = "MyA";

          break;
        case "#/b":
          this.MyComponent = "MyB";

          break;
        case "#/c":
          this.MyComponent = "MyC";

          break;

        default:
          this.MyComponent = "";
          break;
      }
    },
  },
};
</script>
<style lang="less">
.container {
  display: flex;
  width: 400px;
  justify-content: space-around;
  align-items: center;
}
</style>
