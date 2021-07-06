<template>
  <div id="app">
    <router-view></router-view>
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
</style>
