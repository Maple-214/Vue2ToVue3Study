<template>
  <div>
    <MyTable :data="goodsList">
      <template #THeader>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #TBody="{row,index}">
        <td>{{ index }}</td>
        <td>{{ row.goods_name }}</td>
        <td>¥{{ row.goods_price }}</td>
        <td>{{ row.tags }}</td>
        <td>
          <button type="button" class="btn btn-danger btn-sm">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
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
  },
};
</script>
