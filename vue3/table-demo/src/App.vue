<template>
  <div>
    <div class="router-container">
      <router-link to="/">my-home</router-link>
      <router-link to="/movie">my-movie</router-link>
      <router-link to="/about">my-about</router-link>
    </div>
    <router-view></router-view>
    <MyTable :data="goodsList">
      <template #THeader>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #TBody="{ row, index }">
        <td>{{ index }}</td>
        <td>{{ row.goods_name }}</td>
        <td>¥{{ row.goods_price }}</td>
        <td>
          <input
            type="text"
            v-focus
            class="form-control form-control-sm form-ipt"
            v-if="row.ipt_visible"
            v-model="row.ipt_value"
            @blur="blurHandler(row)"
            @keyup.enter="blurHandler(row)"
            @keyup.esc="row.ipt_value = ''"
          />

          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-else
            @click="row.ipt_visible = true"
          >
            +Tag
          </button>

          <span
            v-for="i in row.tags"
            :key="i"
            class="ml-2 badge badge-warning"
            >{{ i }}</span
          >
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            @click="deleteItem(row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script>
/**
 * 如何开启路由高亮 1.使用默认类名 router-link-active 2.自定义累名，需要在router配置文件里设置linkActiveClass
 * 
 * 
 * 
 */
// @ts-ignore
import MyTable from "./components/my-table/MyTable.vue";
import { getGoodsList } from "./api/request.js";

export default {
  name: "App",
  components: {
    MyTable,
  },
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      try {
        const res = await getGoodsList();
        const { code, list, message } = res;
        if (code === 200) {
          this.goodsList = list;
        } else {
          throw new Error(message);
        }
        console.log(res);
      } catch (error) {
        throw new Error(error.message);
      }
    },
    deleteItem(id) {
      this.goodsList = this.goodsList.filter((i) => i.id != id);
    },
    blurHandler(row) {
      const val = row.ipt_value;
      row.ipt_visible = false;
      row.ipt_value = "";
      if (!val || row.tags.includes(val)) return;
      row.tags.push(val);
      console.log(val);
    },
  },
  directives: {
    focus(el) {
      el.focus();
    },
  },
};
</script>
<style lang="less" scoped>
.router-container {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.form-ipt {
  width: 80px;
  display: inline;
}
</style>
