<template lang="">
  <div>
    <div class="container">
      <van-pull-refresh
        :disabled="finished"
        v-model="refreshing"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ArcitleInfo
            v-for="i in artList"
            :key="i.id"
            :title="i.title"
            :authName="i.aut_name"
            :commentCount="i.comm_count"
            :publishTime="i.pubdate"
            :cover="i.cover"
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { fethArticle } from "@/api/request.js";
import ArcitleInfo from "@/components/Article/ArcitleInfo.vue";
import _ from "lodash";

export default {
  components: {
    ArcitleInfo,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      artList: [],
      loading: true,
      finished: false,
      refreshing: false,
    };
  },
  created() {
    this.initArticleData();
  },
  activated() {
    window.addEventListener("scroll", this.recoredTopHandler());
  },
  deactivated() {
    window.removeEventListener("scroll", this.recoredTopHandler());
  },
  methods: {
    async initArticleData(isRefresh) {
      try {
        const res = await fethArticle({
          _page: this.page,
          _limit: this.limit,
        });

        if (res.list) {
          if (isRefresh) {
            this.artList = [...res.list, ...this.artList];
            this.refreshing = false;
          } else {
            this.loading = false;
            this.artList = [...this.artList, ...res.list];
          }
          // 数据全部加载完成
          if (this.artList.length === 40) {
            this.finished = true;
          }
          // console.log(this.artList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    onLoad() {
      // 异步更新数据
      this.page++;
      this.initArticleData();
    },
    onRefresh() {
      this.page++;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.initArticleData(true);
    },
    recoredTopHandler() {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY;
        },
        50,
        { trailing: true }
      );
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 46px;
}
// /deep/ .van-nav-bar__content {
//   // background-color: skyblue;
//   .van-nav-bar__title {
//     color: #fff;
//   }
// }
</style>
