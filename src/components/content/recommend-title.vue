<template>
    <span class="recommend-title">
        <img alt="" :src="showData.image">
        <p>{{showData.title}}</p>
    </span>
</template>

<script>
export default {
      // 组件名称
    name: 'recommend-title',
    // 组件参数 接收来自父组件的数据
    props: {
        showData : {
            type : Object,
            default : function(){
                return {}
            }
        }
        // recommend : {
        //     type : Array,
        //     default : function(){
        //         return []
        //     }
        // }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.recommend-title{
    padding:1rem 3rem;
    text-align: center;
    font-size:0px;
}
img{
    width:16rem;
    height:16rem;
    border-radius:50%;
}
p{
    font-size:12px;

}
</style>