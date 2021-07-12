<template>
    <div class="shop-photo">
      <p class="message">{{title}}</p>
      <div>
        <p class="title">答复阿斯蒂芬</p>
        <div class="img" v-for="(item,index) in showImage" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'shopPhoto',
    // 组件参数 接收来自父组件的数据
    props: {
      title : String,
      showImage : {
        tpye : Array,
        default : function(){
          return []
        }
      }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
.shop-photo{
  padding-top:3rem;
  margin-top:3rem;
  background:#fff;
}
.shop-photo>p{
  font-size:12px;
}
.shop-photo .message{
  font-size:13px;
  padding:0 3rem;
}
.shop-photo .title{
  font-size:15px;
  padding:4rem 3rem 1rem 3rem;
}
.shop-photo img{
  width:100%;
  height:60rem;
  /* font-size:0px; */
}
.shop-photo .img{
  font-size:0px;
  margin-bottom:2rem;
}
</style>