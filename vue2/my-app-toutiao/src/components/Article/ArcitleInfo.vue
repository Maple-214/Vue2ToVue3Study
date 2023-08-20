<template lang="">
  <div>
    <div class="article_item">
      <h3 class="van-multi-ellipsis--l2">
        {{ title }}
      </h3>
      <div v-if="cover.type !== 0" class="img_box">
        <div class="w33 van-image" v-for="i in cover.images" :key="i">
          <img
            class="van-image__img"
            :src="i"
            lazy="loaded"
            style="object-fit: cover"
          />
        </div>
      </div>
      <div class="info_box">
        <span>作者 {{ authName }}</span
        ><span>{{ commentCount }}评论</span
        ><span>发布时间 {{ publishTime }}</span
        ><!---->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    authName: {
      type: String,
      default: "",
    },
    commentCount: {
      type: [String, Number],
      default: "",
    },
    publishTime: {
      type: [String, Number],
      default: "",
    },
    cover: {
      type: Object,
      default: () => ({ cover: 0 }),
    },
  },
};
</script>
<style lang="less">
.article_item {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 0 6px;
  h3 {
    margin: 0;
    padding: 0;
  }
  .img_box {
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    img {
      height: 72px;
      border-radius: 6px;
    }
  }
}
</style>
