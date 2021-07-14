<template>
    <div class="cart">
      <!-- 购物车 顶部导航栏 -->
      <cart-nav :len="getLength"></cart-nav>

      <!-- 滚动部分 -->
      <my-scroll class="wrapper1"
      ref="myscroll">
      
        <!-- 购物车列表展示 -->
        <car-list :goods="getList" @isAllSelect="isAllSelect"></car-list>

      </my-scroll>

      <!-- 底部结算栏 -->
      <buttom-bar @select="select" :isCheck="isCheck" :total="total" :quantity="quantity"></buttom-bar>
    </div>
</template>

<script>
// 导入子组件
const  cartNav = ()=>import("./children/cart-nav.vue")
import CarList from "./children/carList.vue"
import ButtomBar from "./children/buttomBar.vue"
// 导入混入对象
import scroll from "mixin/scroll"
import { mapGetters} from "vuex"

export default {
      // 组件名称
    name: 'cart',
    // 组件参数 接收来自父组件的数据
    props: {},
    mixins : [scroll],
      // 局部注册的组件
    components: {
      cartNav,
      CarList,
      ButtomBar
    },
    computed : {
      ...mapGetters(['getList','getLength']),
      total(){
        return this.getList.filter(item => item.check).reduce((previousValue,currentValue) => {
          return previousValue + currentValue.price * currentValue.counter
        },0)
      },
      quantity(){
        return this.getList.filter(item => item.check).length
      }
    },
      // 组件状态值
    data () {
        return {
          isCheck : false,
        }
    },
    methods : {
      // 是否全选
      isAllSelect(){
        this.isCheck = !this.getList.find(item => !item.check);
      },
      // 全部选中
      select(){
        this.getList.forEach(item => {
          item.check = this.isCheck ? false : true
        });
        this.isCheck = !this.isCheck;
      },
    }
}
</script>
<style scoped>
.cart{
  background-color: rgb(216, 213, 213);
}
.wrapper1{
    height:calc(100vh - 13.0666667rem - 11.7333333rem - 10rem);
    overflow: hidden;
    /* background-color: red; */
}
</style>