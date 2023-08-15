<template lang="">
    <div>
        <h2>slot 组件</h2>
        <!-- 每个slot都需要有名称 如果不给名称默认为default -->
        <slot>default 插槽默认内容</slot>
        <!-- name 具名插槽 && msg 作用域插槽-->
        <slot name="name1" :msg="msg"></slot>

    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'msg子传父'
        }
    }
    
}
</script>
<style lang="">
    
</style>