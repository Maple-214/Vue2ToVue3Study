<template lang="">
    <div>
        <h2>directives</h2>
        <p v-bgColor ="'blue'">1111111111</p>
    </div>
</template>
<script>
export default {
    directives:{
        // bgColor:{
        //     // 只生效一次，在vue3中bind对应mounted updated对应update
        //     bind(el,binding){
        //         console.log(binding);
        //         el.style.color = binding.value
        //     },
        //     updated(el,binding) {
        //         // 当dom更新时调用
        //         el.style.color = binding.value
        //     },
        // },
        // 如果bind和updated代码一样可以简写成函数格式
        bg(el,binding){
            el.style.color = binding.value
        }
    }
    
}
</script>
<style lang="less">
    
</style>