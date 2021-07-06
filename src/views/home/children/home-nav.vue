<template>
    <nav-bar class="home-nav" color="#fff" background="	#EE0000">
        <template v-slot:center>
                购物中心
        </template>
    </nav-bar>
</template>

<script>
import navBar from 'components/common/nav-bar/nav-bar.vue'
export default {
      // 组件名称
    name: 'home-nav',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {navBar},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>

</style>