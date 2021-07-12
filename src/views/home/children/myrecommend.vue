<template>
    <div class="myrecommend">
        <recommend-title 
        v-for="(item,index) in recommendData" 
        :key="index" 
        :showData="item"></recommend-title>
    </div>
</template>

<script>
import recommendTitle from "components/content/recommend-title.vue"

export default {
      // 组件名称
    name: 'myrecommend',
    // 组件参数 接收来自父组件的数据
    props: {
      recommendData : {
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
.myrecommend{
  background:#fff;
  /* margin-top:3rem; */
  padding:3rem 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>