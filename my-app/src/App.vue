<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CarHeaderVue title="购物车案例" />
    <CarGoods
      @checkBoxHadnlder="checkBoxHadnlder"
      v-for="i in list"
      :key="i.id"
      :list="i"
    />
    <CarFooter
      @selectAllHandler="selectAllHandler"
      :totalPrice="totalPrice"
      :isFull="isFull"
      :totalNumber="totalNumber"
    />
  </div>
</template>

<script>
import CarHeaderVue from "@/components/CarHeader/CarHeader.vue";
import CarGoods from "@/components/CarGoods/CarGoods.vue";
import CarFooter from "@/components/CarFooter/CarFooter.vue";

import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    CarHeaderVue,
    CarGoods,
    CarFooter,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getGoods();
    this.$bus.$on("addHandler", (id) => {
      this.list.some((i) => {
        if (i.id === id) {
          i.goods_count++;
        }
      });
    });
    this.$bus.$on("subHandler", (id) => {
      this.list.some((i) => {
        if (i.id === id) {
          i.goods_count--;
        }
      });
    });
  },
  mounted() {},
  methods: {
    async getGoods() {
      const { data: res } = await axios.get("/json/car.json");
      if (res.status === 200) {
        this.list = res.list;
      }
    },
    checkBoxHadnlder({ state, id }) {
      this.list.some((item) => {
        if (item.id === id) {
          item.goods_state = state;
          return true;
        }
      });
    },
    selectAllHandler(val) {
      this.list.forEach((i) => (i.goods_state = val));
    },
  },
  computed: {
    isFull() {
      return this.list.every((i) => i.goods_state);
    },
    totalPrice() {
      return this.list
        .filter((i) => i.goods_state)
        .reduce(
          (total, item) => (total += item.goods_price * item.goods_count),
          0
        );
    },
    totalNumber() {
      return this.list
        .filter((i) => i.goods_state)
        .reduce((total, item) => (total += item.goods_count), 0);
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
