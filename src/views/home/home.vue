<template>
    <div class="home">
      <home-nav></home-nav>
      <myswiper :swiperImage="swiperImage"></myswiper>
      <myrecommend :recommendData="recommendData"></myrecommend>
      <week-recommend :weekRecommend="weekRecommend"></week-recommend>
      <bar-control :title="title" @cbclick="cbclick"></bar-control>
      <goods-show :goodsData="goodsData[currentType]"></goods-show>
      home
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      <p>23456</p>
      </div>
</template>

<script>
// 导入子组件
const HomeNav =()=>import("./children/home-nav.vue")
const myswiper = ()=>import("./children/myswiper.vue")
const myrecommend = ()=>import("./children/myrecommend.vue")
const weekRecommend = ()=>import("./children/week-recommend.vue")
const BarControl = ()=>import("./children/bar-control.vue");
const GoodsShow = ()=>import("./children/goods-show.vue");

// 导入接口文件
import {swiper,recommend,week,goods} from "api/home.js"
// import GoodsShow from './children/goods-show.vue'
// import BarControl from './children/bar-control.vue'
// import WeekRecommend from './children/week-recommend.vue'
// import Myswiper from '../cart/children/myswiper.vue'
export default {
      // 组件名称
    name: 'home',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      HomeNav,
      myswiper,
      myrecommend,
      weekRecommend,
      BarControl,
      GoodsShow
        // GoodsShow
        // BarControl,
        // WeekRecommend,
    },
      // 组件状态值
    data () {
        return {
          swiperImage : [],//轮播数据
          recommendData : [],//推荐数据
          weekRecommend : [],//本周推荐数据
          title : ['流行','新品','精选'],//推荐的类型，组件：BarControl
          //每个推荐类型的数据，组件：BarControl的数据
          goodsData: {
            pop : [],
            new : [],
            selection : []
          },
          //记录当前所选择的推荐类型 ，BarControl 组件类型
          currentType : 'pop'
        }
    },
    created(){
      this.swiper();//获取轮播数据
      this.recommend();//获取推荐数据
      this.getWeekRecommend();//获取本周推荐数据
      this.goods('pop');//页面初始化时，获取一次pop new selection数据
      this.goods('new');
      this.goods('selection');
    },
    methods : {
      // 请求数据方法
      swiper(){
        swiper().then(res=>{
          // console.log(res.data.list);
          this.swiperImage = res.data.list
        });
      },
      recommend(){
        recommend().then(res=>{
          // console.log(res.data.recommend);
          this.recommendData = res.data.recommend;
        })
      },
      getWeekRecommend(){
        week().then(res=>{
          // console.log(res.data)
          this.weekRecommend = res.data.week
        });
      },
      goods(type,page){
        goods(type,page).then(res=>{
          this.goodsData[type] = res.data.goods.goodsList;
          // console.log(this.goodsData);
          // console.log(res)
        })
      },

      // 其他方法
      cbclick(index){//BarControl组件触发点击时，执行的方法
        if(index==0){
          this.currentType='pop'
        }
        if(index==1){
          this.currentType="new"
        }
        if(index==2){
          this.currentType = "selection"
        }
        console.log(this.currentType);
        // this.goods(this.currentType,123456);
      }
    }
}
</script>
<style scoped>
.home{
  background-color:rgb(242, 242, 242);
  /* background-color:#fff; */
}
</style>