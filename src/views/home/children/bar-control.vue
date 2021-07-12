<template>
    <div class="bar-control">
        <div 
        v-for="(item,index) in title" 
        @click="active(index)"
        :class="{isActive:currentIndex==index}"
        :key="index">{{item}}</div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'bar-control',
    // 组件参数 接收来自父组件的数据
    props: {
        title : {
            type : Array,
            default : function(){
                return []
            }
        },
        top : {
            type : Number
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {
            currentIndex : 0,
        }
    },
    methods : {
        active(index){
            // console.log(1234);
            this.$emit("cbclick",index);
            return this.currentIndex = index;
        }
    },
    computed : {}
}
</script>
<style scoped>
.bar-control{
    width:100%;
    margin-top:3rem;
    height:10rem;
    background-color:#fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:18px;
    font-weight: 600;
    color:rgb(160, 156, 156);
    position: sticky;
    /* position:fixed; */
    /* left:0; */
    /* top:50px; */
    /* bottom:100px; */
}
.bar-control>div{
    padding:1rem 3rem 1rem 3rem;
}
.isActive{
    box-shadow: 0px 3px 1px -1px red;
}
</style>