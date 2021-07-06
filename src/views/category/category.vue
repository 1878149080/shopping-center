<template>
    <div class="category">
      <category-nav></category-nav>
    </div>
</template>

<script>
const CategoryNav = ()=>import("./children/category-nav.vue");
export default {
      // 组件名称
    name: 'category',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {CategoryNav},
      // 组件状态值
    data () {
        return {
          // categoryNav
        }
    },
}
</script>
<style scoped>

</style>