<template lang="">
  <div>
    <!-- <Top :title="title" /> -->
    <!-- <LifecycleVue cycle="cycle" /> -->
    <!-- <br>
    <h2>我是父组件</h2>
    <p>{{num}}</p> -->
    <!-- 子传父 自定义事件 -->
    <!-- <EmitValueVue @onNumEmit="onNumEmit"/> -->
    <!-- <h3>ref</h3>
    <Ref ref="vueRef"/>
    <button @click="hideHandler">父组件直接ref调用子组件</button> -->
    <BuyCar/>


  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import LifecycleVue from "@/components/Lifecycle.vue";
import EmitValueVue from "@/components/EmitValue.vue";
import Ref from "@/components/Ref.vue";
import BuyCar from "@/components/BuyCar.vue";



export default {
  components: {
    Top,
    LifecycleVue,
    EmitValueVue,
    Ref,
    BuyCar
  },

  data() {
    return {
      title: "title1",
      num:0
    };
  },
  methods:{
    onNumEmit(val){
      this.num = val
    },
    hideHandler(){
      this.$refs.vueRef.flagHandler()
    }
  }
};
</script>
<style lang=""></style>
