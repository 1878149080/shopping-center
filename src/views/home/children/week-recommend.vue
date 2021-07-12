<template>
    <div class="week-recommend">
        <p>本周推荐</p>
        <div class="week">
            <recommend-title
            v-for="(item,index) in weekRecommend"
            :key="index"
            :showData="item"></recommend-title>
        </div>
    </div>
</template>

<script>
import recommendTitle from "components/content/recommend-title.vue"
export default {
      // 组件名称
    name: 'week-recommend',
    // 组件参数 接收来自父组件的数据
    props: {
        weekRecommend : {
            type : Array,
            default : function(){
                return []
            }
        }
    },
      // 局部注册的组件
    components: {
        recommendTitle
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.week-recommend{
    margin-top:3rem;
    padding:3rem 0;
    background: #fff;
    /* display:flex; */
}
.week-recommend>p{
    /* outline:3px solid red; */
    font-size:18px;
    font-weight: 600;
    width:100%;
    text-align: center;
    color:#ccc;
}
.week-recommend>.week{
    margin-top:3rem;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    /* flex-flow:column; */
    /* text-align: center; */
}
</style>