<template>
    <div class="car-list">
        <car-list-item v-for="(item,index) in goods" :key="index" :data="item" @isAllSelect="itemClick"></car-list-item>
    </div>
</template>

<script>
import CarListItem from "./carLIstItem.vue"
export default {
      // 组件名称
    name: 'carList',
    // 组件参数 接收来自父组件的数据
    props: {
        goods : {
            type : Array,
            default : function(){
                return [];
            }
        }
    },
      // 局部注册的组件
    components: { CarListItem},
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {
        itemClick(){
            this.$emit("isAllSelect");
        }
    }
}
</script>
<style scoped>

</style>