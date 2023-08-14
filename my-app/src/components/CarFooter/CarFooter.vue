<template lang="">
    <div class="car_footer">
        <label for="">
            <input @change="selectAllHandler" type="checkbox" :checked="isFull">
            <span>全选</span>
        </label>
        <div>
            <span>合计：</span></span>
            <span class="car_total">¥{{totalPrice}}</span>
        </div>
        <div class="car_btn">
            结算({{totalNumber}})
        </div>
    </div>
</template>
<script>
export default {
    props:{
        isFull: {
            type: Boolean,
            required: true,
        },
        totalPrice:{
            type:Number,
            required: true,
            default(){
                return 0
            }
        },
        totalNumber:{
            type:Number,
            required: true,
            default(){
                return 0
            }
        }
        
    },
    methods: {
        selectAllHandler(e){
            this.$emit('selectAllHandler', e.target.checked);
        }
    },
    
}
</script>
<style lang="less">
.car_footer{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    .car_total{
        color: red;
    }
    .car_btn {
        margin-right: 5px;
        border-radius: 20px;
        background-color: skyblue;
        text-align: center;
        padding: 6px 20px;
        color: #fff;
    }
    label{
        padding-left: 5px;
        input{
            margin-right: 5px;
        }
    }
}
</style>