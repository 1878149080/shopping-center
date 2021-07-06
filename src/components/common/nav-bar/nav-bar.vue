<template>
    <div class="nav-bar" :style="{color:color,background:background}">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'nav-bar',
    // 组件参数 接收来自父组件的数据
    props: {
        color : {
            type : String,
            default : '#ccc'
        },
        background : {
            type : String,
            default : '	#C4C4C4'
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
    computed : {
        
    }
}
</script>
<style scoped>
.nav-bar{
    height:11.7333333rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* outline:1px solid red; */
    font-size:20px;
    font-weight: 600;
    box-shadow: 0 1px 6px 0px #EAEAEA;
}
</style>