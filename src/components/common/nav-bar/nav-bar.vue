<template>
    <div class="nav-bar" :style="{color:color,background:background}">
        <div class="left" @click="backClick">
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
        
    },
    methods : {
        backClick(){
            this.$emit("back");
        }
    }
}
</script>
<style scoped>
.nav-bar{
    height:11.7333333rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:20px;
    font-weight: 600;
    box-shadow: 0 1px 6px 0px #EAEAEA;
}
.nav-bar .left{
    /* background: black; */
    /* text-align: center; */
    flex: 1;
}
.nav-bar .center{
    text-align: center;
    flex: 1;
}
.nav-bar .right{
    flex:1
}
</style>