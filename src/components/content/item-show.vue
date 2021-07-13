<template>
    <div class="item-show" @click="itemClick">
      <div class="image">
                <img :src="data.image" alt="">
      </div>
        <p class="description">{{data.description}}</p>
        <p class="price">
          <span>￥ {{data.price}}</span>
          <span class="quantity">{{data.purchase}}已购买</span>
        </p>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'item-show',
    // 组件参数 接收来自父组件的数据
    props: {
      data : {
        type : Object,
        default :function(){
          return {}
        }
      }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
    methods : {
      itemClick(){
        this.$router.push({
          path:'/detail',
          query : {
            id:this.data.id
          }
        });
      }
    }
}
</script>
<style scoped>
.item-show{
    width:45rem;
    /* height:69.3333333rem; */
    height: 65rem;
    margin-bottom:3rem;
    background-color: #fff;
    /* background-color: red; */
    border-radius:5px;
    font-size:0px;
    /* outline:1px solid red; */
}
.item-show>.image{
  width:100%;
  height:45.6rem;
}
.item-show img{
  width:100%;
  height:45.6rem;
  border-radius:5px 5px 0 0;
  font-size:0px;
  margin-bottom:3rem;

}
.item-show .description{
  padding:0 3rem;
  font-size:13px;
  margin-bottom:2rem;
}
.item-show .price{
  padding:0 3rem;
  font-size:14px;
  font-weight: 600;
  color:#ff0033
}
.item-show .price .quantity{
  margin-left: 30px;
  color:#ccc;
}
</style>