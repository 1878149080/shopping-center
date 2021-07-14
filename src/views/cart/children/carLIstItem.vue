<template>
    <div class="car-list-item">
        <check-button @click.native="changeCheck" class="button" :isCheck="data.check"></check-button>
        <div class="image"><img :src="data.logo" alt=""></div>
        <div class="info">
            <p class="title">{{data.title}}</p>
            <p class="description">{{data.description}}</p>
            <div class="buttom">
                <span class="price">￥{{data.price}}</span>
                <span class="counter">x {{data.counter}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from "./checkButton.vue"
export default {
      // 组件名称
    name: 'carListItem',
    // 组件参数 接收来自父组件的数据
    props: {
        data : {
            type : Object,
            default : function(){
                return {};
            }
        }
    },
      // 局部注册的组件
    components: {
        CheckButton
    },
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {
        changeCheck(){
            this.data.check = !this.data.check;
            this.$emit("isAllSelect");
        }
    }
}
</script>
<style scoped>
.car-list-item{
    height:32rem;
    margin-top:2.6666667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 1rem;
    background-color:#fff;
    margin-bottom : 3rem;
}
.car-list-item .button{
    width:9.3333333rem;
}

.car-list-item .image{
    width:22.9333333rem;
    height:28rem;
}
.car-list-item .image img{
    width:100%;
    height:100%;
    border-radius : 5px;
    border:none;
    outline:none;
}
.car-list-item .info{
    width:65rem;
    height:28rem;
    padding:0 3rem;
    font-size:15px;
}
.car-list-item .info p{
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.car-list-item .info .title{
    border:1px solid transparent;
}
.car-list-item .info .description{
    margin-top:3rem;
}
.car-list-item .buttom{
    margin-top:8rem;
    padding-right:7rem;
}
.car-list-item .buttom .price{
    color:red;
}
.car-list-item .buttom .counter{
    float: right;
}
</style>