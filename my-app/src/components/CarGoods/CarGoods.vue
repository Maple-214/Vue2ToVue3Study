<template lang="">
  <div class="goods_container">
    <div class="thumb">
      <div class="custom_control custom_checkbox">
        <input
          type="checkbox"
          class="custom_contarol_input"
          @change="checkBoxHadnlder"
          id="cb1"
          :checked="list.goods_state"
        />
        <label for="cb1" class="custom_control_label">
          <img :src="list.goods_img" alt="" />
        </label>
      </div>
    </div>

    <div class="goods_info">
      <h6 class="goods_title">{{ list.goods_name }}</h6>
      <div class="goods_info_bottom">
        <span class="goods_price">¥{{ list.goods_price }}</span>
        <CarCount :goodsCount="list.goods_count" :id="list.id" />
      </div>
    </div>
  </div>
</template>
<script>
import CarCount from "@/components/CarCount/CarCount.vue";

export default {
  components: {
    CarCount,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  methods: {
    checkBoxHadnlder(e) {
      const state = e.target.checked;
      const id = this.list.id;
      this.$emit("checkBoxHadnlder", { state, id });
    },
  },
};
</script>
<style lang="less" scoped>
.goods_container {
  display: flex;
  margin-bottom: 10px;
  .custom_control {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goods_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-left: 12px;
  }
  .custom_contarol_input {
    margin: 0 5px;
  }
  .goods_info_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 14px;
  }
  img {
    width: 150px;
    height: 150px;
  }
}
</style>
