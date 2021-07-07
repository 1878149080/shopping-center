<template>
    <div class="home">
      <home-nav></home-nav>
      <myswiper :swiperImage="swiperImage"></myswiper>
      <myrecommend :recommendData="recommendData"></myrecommend>
      <week-recommend :weekRecommend="weekRecommend"></week-recommend>
      home
      </div>
</template>

<script>
// 导入子组件
const HomeNav =()=>import("./children/home-nav.vue")
const myswiper = ()=>import("./children/myswiper.vue")
const myrecommend = ()=>import("./children/myrecommend.vue")
const weekRecommend = ()=>import("./children/week-recommend.vue")

// 导入接口文件
import {swiper,recommend,week} from "api/home.js"
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
      weekRecommend
        // WeekRecommend,
    },
      // 组件状态值
    data () {
        return {
          swiperImage : [],
          recommendData : [],
          weekRecommend : [],
        }
    },
    created(){
      this.swiper();
      this.recommend();
      this.getWeekRecommend();
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
          console.log(res.data.recommend);
          this.recommendData = res.data.recommend;
        })
      },
      getWeekRecommend(){
        week().then(res=>{
          console.log(res.data)
          this.weekRecommend = res.data.week
        });
      }
    }
}
</script>
<style scoped>
.home{
  background-color:rgb(216, 212, 212);
}
</style>