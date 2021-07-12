<template>
    <div class="shop-info">
        <p class="message"><span class="title">【{{shopName}}】</span>{{description}}</p>
        <p class="price">
            <span class="oldPrice">￥{{price}}</span>
            <span class="newPrice">￥{{oldPrice}}</span>
        </p>
        <p class="saleInfo">
            <span>销量 {{saleVolume}}</span>
            <span>收藏 {{collection}}</span>
            <span>{{release}}小时发布</span>
        </p>
        <p class="other">
            <span>退货补运费</span>
            <span>全国包邮</span>
            <span>8天无理由退货</span>
        </p>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'shopInfo',
    // 组件参数 接收来自父组件的数据
    props: {
        description : String,
        shopName : String,
        price : Number,
        oldPrice : Number,
        saleVolume : Number,
        collection : Number,
        release : {
            type : Number,
            default : 24
        }
    },
      // 局部注册的组件
    components: {},
      // 组件状态值
    data () {
        return {}
    },
}
</script>
<style>
.shop-info{
    width:100%;
    padding:0 3rem;
    background-color:#fff;
    padding-bottom:5rem;
    box-shadow: 0px 0px 8px 0px rgb(197, 195, 195);
    padding-top:3rem;
}
.shop-info>.message{
    font-size:15px;
    font-weight: 600;
}
.shop-info .title{
    /* font-size: */
}
.shop-info .price{
    margin-top:1rem;
}
.shop-info .oldPrice{
    color:#ff0033;
    font-weight: 900;
    font-size: 20px;
    margin-right:1rem;
}
.shop-info .newPrice{
    font-size: 13px;
    text-decoration: line-through;
    font-weight: normal;
}
.shop-info .saleInfo{
    width:100%;
    /* margin-top:3rem; */
    display: flex;
    justify-content: space-between;
    line-height:10rem;
    border-bottom:1px solid #C4C4C4;
    font-size: 14px;
    color:	#C4C4C4;
    font-weight:normal;
}
.shop-info .other{
    display: flex;
    justify-content: space-between;
    margin-top:5rem;
    font-size:12px;
    font-weight: 600;
}
</style>