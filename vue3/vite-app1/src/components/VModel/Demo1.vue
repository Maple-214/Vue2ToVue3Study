<template lang="">
  <div>
    <h3>父组件传来的props</h3>
    <p>{{ hello }}</p>
    <button @click="ValueHandler">改变value</button>
  </div>
</template>
<script>
export default {
  props: ["hello"],
  emits: ["update:hello"],
  methods: {
    ValueHandler() {
      this.$emit("update:hello", "hello2");
    },
  },
};
</script>
<style lang=""></style>
