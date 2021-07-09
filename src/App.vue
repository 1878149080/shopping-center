<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-bar></main-bar>
  </div>
</template>
<script>
// 引入content组件
import MainBar from "components/content/main-bar.vue"
// import HomeNav from './views/home/children/home-nav.vue'
// 导入子组件
export default {
  components : {
    MainBar,
  }
}
</script>
<style>
@import '~assets/icon/iconfont.css';
@import '~assets/css/base.css';
#app{
    background-color:rgb(216, 212, 212);
}
</style>
