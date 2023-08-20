<template lang="">
  <div>
    <van-nav-bar title="标题" fixed />
    <div class="container">
      <ArcitleInfo
        v-for="i in artList"
        :key="i.id"
        :title="i.title"
        :authName="i.aut_name"
        :commentCount="i.comm_count"
        :publishTime="i.pubdate"
        :cover="i.cover"
      />
    </div>
  </div>
</template>
<script>
import { fethArticle } from "@/api/request.js";
import ArcitleInfo from "@/components/Article/ArcitleInfo.vue";

export default {
  components: {
    ArcitleInfo,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      artList: [],
    };
  },
  created() {
    this.initArticleData();
  },
  methods: {
    async initArticleData() {
      try {
        const res = await fethArticle({
          _page: this.page,
          _limit: this.limit,
        });
        console.log(res);

        this.artList = res.list;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 46px;
}
/deep/ .van-nav-bar__content {
  background-color: skyblue;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
