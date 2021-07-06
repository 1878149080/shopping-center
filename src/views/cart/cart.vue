<template>
    <div class="cart">
      <cart-nav></cart-nav>
    </div>
</template>

<script>
const  cartNav = ()=>import("./children/cart-nav.vue")
export default {
      // 组件名称
    name: 'cart',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
      cartNav
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>

</style>