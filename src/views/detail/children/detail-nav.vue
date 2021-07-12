<template>
    <nav-bar class="detail-nav" color="#fff" background="	#EE0000" @back="back">
        <template v-slot:left>
          <span class="iconfont icon-leftarrow back"></span>
        </template>
        <template v-slot:center class="center156723">
          <div class="content">
            <span 
            v-for="(item,index) in title" 
            :class="{active:currentIndex===index}"
            :key="index" @click="active(index)">{{item}}</span>
          </div>
        </template>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/nav-bar/nav-bar.vue"
export default {
      // 组件名称
    name: 'detail-nav',
    // 组件参数 接收来自父组件的数据
    props: {
    },
      // 局部注册的组件
    components: {
        NavBar
    },
      // 组件状态值
    data () {
        return {
          currentIndex : 0,
          title : ["商品","参数","评论","推荐"]
        }
    },
    methods : {
      back(){
        this.$router.go(-1);
      },
      active(index){
        // console.log(this.currentIndex);
        this.currentIndex = index;
        this.$emit("active",index);
      }
    },
    created(){
    }
}
</script>
<style scoped>
.detail-nav .back{
  padding-left:6rem;
  font-size:8rem;
}
.content{
  width:100%;
  display: flex;
  justify-content: space-around;
  font-size: 4.5333333rem;
}
.active{
  color:black;
}
</style>