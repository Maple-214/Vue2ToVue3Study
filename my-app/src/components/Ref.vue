<template lang="">
    <div>
        <h2>Ref</h2>
        <input @blur="blurHandler"  ref="inputRef" v-show="flag" type="text">
        <button @click="flagHandler">显示input</button>
    </div>
</template>
<script>
export default {
    /**
     * ref 放在dom结构上 获取到dom
     * ref 放在组件上  获取到组件实例
     * 
     * 
     * 
     * 
     */
    data(){
        return {
            flag:false
        }
    },
    methods:{
        flagHandler(){
            this.flag = true
            this.$nextTick(()=>{
                this.$refs.inputRef.focus()
            })
        },
        blurHandler(){
            this.flag = false
        }
    }
    
}
</script>
<style lang="">
    
</style>