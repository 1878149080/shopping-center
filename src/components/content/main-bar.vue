<template>
    <bar class="main-bar">
        <item-bar path="/home" color='#EE0000'>home</item-bar>
        <item-bar path='/category' icon="icon-category" color="#00ff33">category</item-bar>
        <item-bar path="/cart" icon="icon-cart-Empty" color="#0066ff">cart</item-bar>
        <item-bar path="/profile" icon="icon-profile" color="	#EEEE00">profile</item-bar>
    </bar>
</template>

<script>
import Bar from 'components/common/bar/bar.vue'
import ItemBar from 'components/common/bar/item-bar.vue'
export default {
      // 组件名称
    name: 'main-bar',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {ItemBar,Bar},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>

</style>