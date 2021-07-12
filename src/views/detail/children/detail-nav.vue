<template>
    <nav-bar class="detail-nav" color="#fff" background="	#EE0000" @back="back">
        <template v-slot:left>
          <span class="iconfont icon-leftarrow back"></span>
        </template>
        <template v-slot:center>商品详情</template>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/nav-bar/nav-bar.vue"
export default {
      // 组件名称
    name: 'detail-nav',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
        NavBar
    },
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {
      back(){
        this.$router.go(-1);
      }
    },
    created(){
    }
}
</script>
<style scoped>
.detail-nav .back{
  padding-left:6rem;
  font-size:30px;
  
}
</style>