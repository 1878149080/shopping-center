<template>
    <div class="back-top">
        <span class="iconfont icon-rising"></span>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'back-top',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.back-top{
    position:absolute;
    right:20px;
    bottom:80px;
    width:45px;
    height:45px;
    text-align: center;
    background-color: rgb(177, 172, 172);
    border-radius:50%;
    line-height: 45px;
    transition: all 0.5s;
    opacity: 1;
}
.back-top span{
    font-size:40px;
    font-weight: 600;
    color:#fff;
}
</style>