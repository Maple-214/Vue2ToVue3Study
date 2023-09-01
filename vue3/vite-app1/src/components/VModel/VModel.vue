<template lang="">
  <div>
    <h2>父组件</h2>
    <h3>{{ hello }}</h3>
    <h2>子组件</h2>
    <Demo1 v-model:hello="hello"/>
  </div>
</template>
<script>
import Demo1 from "./Demo1.vue";
export default {
  components: {
    Demo1,
  },
  data() {
    return {
      hello: "hello",
    };
  },
};
</script>
<style lang=""></style>
