<template>
    <div class="detail-bar">
      <span class="service" @click="customer">
        <span class="iconfont icon-kefu"></span>
        <p>客服</p>
      </span>
      <span class="shop" @click="shop">
        <span class="iconfont icon-dianpu"></span>
        <p>店铺</p>
      </span>
      <span class="collection" @click="collection">
        <span class="iconfont icon-shoucang"></span>
        <p>收藏</p>
      </span>
      <span class="trolly" @click="trolly">加入购物车</span>
      <span class="purchase" @click="purchase">购买</span>
    </div>
</template>

<script>
// 引入公共组件
export default {
      // 组件名称
    name: 'detailBar',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
    },
      // 组件状态值
    data () {
        return {}
    },
    methods : {
      customer(){
        console.log('我是客服');
      },
      shop(){
        console.log('我是店铺');
      },
      collection(){
        console.log('我是收藏');
      },
      trolly(){
        console.log('加入购物车');
        this.$emit("addCart");
      },
      purchase(){
        console.log('购买');
      }
    }
}
</script>
<style scoped>
.detail-bar{
    width:100%;
    height:49px;
    position:relative;
    left:0;
    bottom:0px;
    display:flex;
    padding:0 10px;
    background:#fff;
    justify-content:space-between;
    align-items: center;
    padding:0;
    font-size: 12px;
    z-index: 9;
    box-shadow: 0px -1px 3px 2px rgb(209, 205, 205);
}
.detail-bar>span{
  flex:1;
  text-align: center;
}
.detail-bar>span>span{
  font-size:21px;
}
.detail-bar>span>p{
  font-size:12px;
}
.detail-bar .purchase
{
  color:#fff;
  font-weight: 600;
  font-size:20px;
  height:100%;
  line-height: 49px;
  background: rgb(250, 118, 152);
}
.detail-bar .trolly{
  color:#fff;
  font-weight: 600;
  flex:2;
  height:100%;
  line-height: 49px;
  font-size:18px;
  background: rgb(249, 218, 18);
}
</style>