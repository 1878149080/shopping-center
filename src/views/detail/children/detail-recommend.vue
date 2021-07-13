<template>
    <div class="detail-recommend">
      <div class="title">推荐</div>
      <div class="content">
        <item-show v-for="(item,index) in recommend" :key="index" :data="item"></item-show>
      </div>
    </div>
</template>

<script>
import ItemShow from "components/content/item-show.vue"

export default {
      // 组件名称
    name: 'detail-recommend',
    // 组件参数 接收来自父组件的数据
    props: {
      recommend : {
        type :Array,
        default : function(){
          return []
        }
      }
    },
      // 局部注册的组件
    components: {
      ItemShow
    },
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {

    }
}
</script>
<style scoped>
.detail-recommend{
  margin-top:4rem;
  background:rgb(231, 226, 226);
  /* border:1px solid red; */
}
.detail-recommend .title{
  width:100%;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color:#ccc;
  padding:3rem;
}
.detail-recommend .content{
  /* padding:0rem 0; */
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
}
</style>