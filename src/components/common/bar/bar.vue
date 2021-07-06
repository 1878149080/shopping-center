<template>
    <div class="bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'bar',
    // 组件参数 接收来自父组件的数据
    props: {
        
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {
        }
    },
}
</script>
<style scoped>
.bar{
    /* outline:1px solid red; */
    height:13.0666667rem;
    width:100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    position:fixed;
    left:0;
    bottom:0;
    font-size:12px;
    text-align: center;
    box-shadow: 0 -1px 1px 0px #EAEAEA;
}
</style>