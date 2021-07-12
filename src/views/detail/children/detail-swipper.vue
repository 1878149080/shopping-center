<template>
    <Swiper class="swiper">
        <Slide 
        :style="{background:'url('+item+')'}"
        v-for="(item,index) in swiperImage" :key="index">
            <img :src="item" alt="">
            <!-- <div class="img" :style="{background:'url('+itme+')'}"></div> -->
        </Slide>
    </Swiper>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
      // 组件名称
    name: 'detail-swipper',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
        Swiper,
        Slide
    },
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {

    }
}
</script>
<style scoped>

</style>