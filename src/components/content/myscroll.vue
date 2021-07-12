<template>
    <div  ref="wrapper" class="wrapper">
        <div class="content" ref="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core"
import PullUp from '@better-scroll/pull-up'

BScroll.use(PullUp)
export default {
      // 组件名称
    name: 'wrapper',
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
    },
      // 组件状态值
    data () {
        return {
            scroll : null
        }
    },
    mounted(){
        this.BScrollInit();
        this.scroll.on('scroll',position=>{
            this.$emit('scrollevent',position);
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp');
            this.scroll.finishPullUp();
        });
    },
    updated(){

    },
    methods : {
        BScrollInit(){
            // this.$nextTick(()=>{
                this.scroll = new BScroll(this.$refs.wrapper,{
                    click:true,
                    pullUpLoad: {
                        threshold: 0
                    },
                    probeType : 3,
                });
            // });
        },
        top(x=0,y=0,time=1000){
            this.scroll.scrollTo(x,y,time);
        },
    }
}
</script>
<style scoped>
/* .wrapper{ */
    /* height:300px; */
/* } */
.content{
    /* height:3000px; */
}
</style>