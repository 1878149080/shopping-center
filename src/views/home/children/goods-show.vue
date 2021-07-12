<template>
    <div class="goods-show">
        <item-show
        v-for="(item,index) in goodsData"
        :key="item.description"
        :data="item"
        ></item-show>
    </div>
</template>

<script>
import ItemShow  from "components/content/item-show.vue"
export default {
      // 组件名称
    name: 'goods-show',
    // 组件参数 接收来自父组件的数据
    props: {
      goodsData : {
        type : Array,
        default : function(){
          return []
        }
      }
    },
      // 局部注册的组件
    components: {ItemShow},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.goods-show{
  padding:3rem 0;
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  /* background-color:#ccc; */
}
</style>