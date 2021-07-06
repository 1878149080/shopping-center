<template>
    <span class="item-bar" 
    @click="changeRouter" 
    :style="activePathStyle">
        <span class="iconfont" :class="icon"></span>
        <p><slot></slot></p>
    </span>
</template>

<script>
export default {
      // 组件名称
    name: 'item-bar',
    // 组件参数 接收来自父组件的数据
    props: {
        path : String,
        icon : {
            type : String,
            default : 'icon-home'
        },
        color : {
            type : String,
            default : 'red'
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {
            // currentIndex : 0,
            // currentRouter : '/home'
        }
    },
    methods : {
        changeRouter(){
            // console.log(this.$route);
            // console.log(this.$router);
            this.path == this.$route.path || this.$router.replace({path:this.path});
        }
    },
    computed : {
        activePathStyle(){
            // console.log(this.currnetPath);
            return this.path == this.$route.path ? {color:this.color} : {}
        }
    }
}
</script>
<style scoped>
.item-bar>span{
    font-size:6.4rem;
}
</style>