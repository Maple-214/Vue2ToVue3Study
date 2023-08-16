<template lang="">
  <div>
    <p>我是子组件</p>
    <p>{{ num }}</p>
    <p>接受兄弟组件的值</p>
    <p>{{b_value}}</p>
    <button @click="numHandler">添加</button>
  </div>
</template>
<script>
/**
 * 父传子 props 自定义属性 provide、inject（依赖注入） parent/children ref/$refs slot
 * 子传父 $emit 自定义事件 slot
 * 兄弟组件 EventBus  vuex
 * 
 * 
 */
export default {
    created(){
        this.$bus.$on('onBrother',(val)=>{
            this.b_value = val
        })
        // 方式2
        // $bus.$on('onBrother',(val)=>{
        //     this.b_value = val
        // })

    },
  data() {
    return {
      num: 0,
      b_value:null
    };
  },
  methods: {
    numHandler() {
      this.num++;
      //   子传父，自定义事件
      this.$emit("onNumEmit", this.num);
    },
  },
};
</script>
<style lang=""></style>
