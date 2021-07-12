<template>
<div class="swiper">
        <Swiper class="swiper">
        <Slide>
                    1
            </Slide>
            <Slide>
                2
            </Slide>
            <Slide>
                3
            </Slide>
    </Swiper>
</div>
</template>

<script>
// 导入第三方轮播
import { Swiper, Slide } from 'vue-swiper-component';
export default {
      // 组件名称
    name: 'swiper',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
        Swiper,
        Slide
    },
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style scoped>
.swiper{
  height:53.3333333rem;
  outline:2px solid red;
}
</style>