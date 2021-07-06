<template>
    <div class="home">
      <home-nav></home-nav>
      home
      </div>
</template>

<script>
const HomeNav =()=>import("./children/home-nav.vue")
export default {
      // 组件名称
    name: 'home',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      HomeNav
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.home{
  /* background-color:rgb(216, 212, 212); */
}
</style>