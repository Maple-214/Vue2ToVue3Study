<template lang="">
    <div>
        <h2>directives</h2>
        <p v-bgColor="'blue'">1111111111</p>
    </div>
</template>
<script>
export default {
    directives:{
        bgColor:{
            bind(el,binding){
                console.log(binding);
                el.style.color = binding.value
            }
        }
    }
    
}
</script>
<style lang="less">
    
</style>