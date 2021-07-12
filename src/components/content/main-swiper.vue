<template>
<Swiper class="main-swiper" v-if="swiperImage.length>0">
    <!-- <Slide v-for="(item,index) in swiperImage" :key="index">
        1
    </Slide> -->
    <!-- <Slide v-for="item in swiperImage" :key="item">{{item}}</Slide> -->
    <!-- <Slide>{{swiperImage[0]}}</Slide>
    <Slide>{{swiperImage[1]}}</Slide> -->
    <Slide v-for="(item,index) in swiperImage" :key="index">
        <img :src="item" alt="">
    </Slide>
</Swiper>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
      // 组件名称
    name: 'main-bar',
    // 组件参数 接收来自父组件的数据
    props: {
        swiperImage : {
            type : Array,
            default : function(){
                return []
            }
        }
    },
      // 局部注册的组件
    components: {
        Swiper,
        Slide
    },
      // 组件状态值
    data () {
        return {
            arr : [1,2,3,4]
        }
    },
}
</script>
<style scoped>
.main-swiper{
    height:53.3333333rem;
}
.main-swiper img{
    width:100%;
    height:110%;
}
</style>