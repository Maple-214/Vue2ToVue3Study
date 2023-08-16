<template lang="">
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { id: 0, name: "苹果", state: false, price: 4, count: 3 },
        { id: 1, name: "苹果2", state: true, price: 4, count: 3 },
        { id: 2, name: "苹果3", state: true, price: 4, count: 3 },
        { id: 3, name: "苹果4", state: false, price: 4, count: 3 },
      ],
    };
  },
  mounted(){
    console.log(this.sumHandler());

  },
  methods: {
    sumHandler() {
      this.list
        .filter((i) => i.state)
        .reduce((total, item) => {
          return (total += item.price * item.count);
        }, 0);
    },
  },
};
</script>
<style lang=""></style>
