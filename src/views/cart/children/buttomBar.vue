<template>
    <div class="buttom-bar">
        <check-button class="button" :isCheck="isCheck" @click.native="clickCheck">全选</check-button>
        <span class="total">
          合计:￥{{total}}
        </span>
        <div class="settlement">去结算 ({{quantity}})</div>
    </div>
</template>

<script>
import CheckButton from "./checkButton.vue"
export default {
      // 组件名称
    name: 'buttom-bar',
    // 组件参数 接收来自父组件的数据
    props: {
      total : {
        type : Number,
        default : 0
      },
      quantity : {
        type : Number,
        default : 0
      },
      isCheck : {
        type : Boolean,
        default : false
      }
    },
      // 局部注册的组件
    components: { CheckButton },
      // 组件状态值
    data () {
        return {

        }
    },
    methods : {
      clickCheck(){
        this.$emit("select");
      }
    }
}
</script>
<style scoped>
.buttom-bar{
  line-height: 10rem;
    background-color:#ccc;
    height:10rem;
    font-size : 12px;
}
.buttom-bar .total{
  margin-left:5rem;
}
.button {
  width:20rem;
  display: inline-block;
}
.buttom-bar .settlement{
  width:30rem;
  height:100%;
  background-color:red;
  float: right;
  text-align: center;
  /* line-height: 10rem; */
  color:#fff;
  font-weight: 600;
  font-size:15px;
}
</style>