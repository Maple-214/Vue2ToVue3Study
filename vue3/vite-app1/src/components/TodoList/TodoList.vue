<template lang="">
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
            name=""
          />
          <label class="custom-control-label" for="">22222</label>
        </div>
        A list item
        <span class="badge badge-primary badge-pill">14</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        A second list item
        <span class="badge badge-primary badge-pill">2</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        A third list item
        <span class="badge badge-primary badge-pill">1</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      defaulu: [],
      require: true,
    },
  },
};
</script>
<style lang="less">
.badge-primary {
  color: #fff;
  background-color: #007bff;
}
.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}
</style>
