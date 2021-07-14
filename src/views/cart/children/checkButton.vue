<template>
    <div class="check-button">
        <span class="iconfont icon-duigou" :class="{check:isCheck}"></span>
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'checkButton',
    // 组件参数 接收来自父组件的数据
    props: {
        isCheck : {
            type : Boolean,
            default : false,
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {

    }
}
</script>
<style scoped>
.check-button{
    text-align: center;
    font-size:12px;
}
.check-button .iconfont{
    padding:0.8rem;
    border-radius: 50%;
    border:1px solid rgb(201, 197, 197);
    color:#fff;
}
.check{
    border-color: red !important;
    color:red !important;
}
</style>