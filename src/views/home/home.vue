<template>
    <div class="home">
      <home-nav></home-nav>
      <my-scroll class="wrapper" 
      @scrollevent="scrollevent"
      ref='myscroll'
      @pullingUp="goods(currentType)">
        <main-swiper :swiperImage="swiperData"></main-swiper>
        <myrecommend :recommendData="recommendData"></myrecommend>
        <week-recommend :weekRecommend="weekRecommend"></week-recommend>
        <bar-control :title="title" @cbclick="cbclick" ref="barcontrol"></bar-control>
        <goods-show :goodsData="goodsData[currentType].list"></goods-show>
      </my-scroll>
      <back-top @click.native="backtop" :class="{show:show}"></back-top>
    </div>
</template>

<script>

// 导入子组件
import HomeNav from "./children/home-nav.vue"
import myrecommend from "./children/myrecommend.vue"
import weekRecommend from "./children/week-recommend.vue"
import BarControl from "./children/bar-control.vue"
import GoodsShow from "./children/goods-show.vue"

// 导入项目公共组件
import MainSwiper from "components/content/main-swiper.vue"

// 导入混入对象
import top from "mixin/top.js"
import scroll from "mixin/scroll.js"

// 导入接口文件
import {swiper,recommend,week,goods} from "api/home.js"

export default {
      // 组件名称
    name: 'home',
    // 组件参数 接收来自父组件的数据
    props: {},
    mixins : [top,scroll],
      // 局部注册的组件
    components: {
      HomeNav,
      myrecommend,
      weekRecommend,
      BarControl,
      GoodsShow,
      MainSwiper,
    },
      // 组件状态值
    data () {
        return {
          swiperData : [],//轮播数据
          recommendData : [],//推荐数据
          weekRecommend : [],//本周推荐数据
          title : ['流行','新品','精选'],//推荐的类型，组件：BarControl
          //每个推荐类型的数据，组件：BarControl的数据
          goodsData: {
            pop : {
              counter : 0,
              list : []
            },
            new : {
              counter : 0,
              list: []
            },
            selection : {
              counter : 0,
              list: []
            }
          },
          //记录当前所选择的推荐类型 ，BarControl 组件类型
          currentType : 'pop',
          // show: true,//是否现实返回顶部按钮
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
          // this.swiperData.push(...res.data.list)
          this.swiperData = res.data.list;
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
      goods(type){
        let counter = this.goodsData[type].counter++;
        goods(type,counter).then(res=>{
          this.goodsData[type].list.push(...res.data.goods.goodsList);
          this.$refs.myscroll.scroll.refresh()
          // console.log(this.goodsData[type]);
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
      },
    },
    deactivated(){
      console.log('离开home')
    },
    destroyed(){
      console.log('home被销毁了')
    },
}
</script>
<style scoped>
.home{
  background-color:rgb(242, 242, 242);
}
.wrapper{
  height:calc(100vh - 13.0666667rem - 11.7333333rem);
  overflow: hidden;
}
.show{
  opacity: 0;
}
</style>