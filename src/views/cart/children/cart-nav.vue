<template>
    <nav-bar class="nav-bar" color="#fff" background="#EE0000">
        <template v-slot:center>
          购物车 <span v-if="len">{{`(${len})`}}</span>
        </template>
    </nav-bar>
</template>

<script>
// import navBar from "components/common/nav-bar/nav-bar.vue"
// 导入混入对象
import {navBarMixin} from "mixin/index.js"


export default {
      // 组件名称
    name: 'cart-nav',
    mixins : [navBarMixin],
    // 组件参数 接收来自父组件的数据
    props: {
      len : Number
    },
      // 局部注册的组件
    components: {
        // navBar
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>

</style>