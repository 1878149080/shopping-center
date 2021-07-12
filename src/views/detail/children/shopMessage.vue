<template>
    <div class="shop-message">
        <div class="shop-image">
            <span class="logo"><img :src="logo" alt=""></span>
            <span class="shop-name">{{shopName}}</span>
        </div>
        <div class="sale-message">
            <div class="sale-volume">
                <span>{{shopSales}}</span>
                <p>总销量</p>
            </div>
            <div class="quantity">
                <span>{{shopTotalCategory}}</span>
                <p>全部宝贝</p>
            </div>
            <div class="comment">
                <p><span>描述相符</span><span class="mark">5.6</span><span>高</span></p>
                <p><span>价格合理</span><span class="mark">5.6</span><span>低</span></p>
                <p><span>质量满意</span><span class="mark">5.6</span><span>好</span></p>
            </div>
        </div>
        <div class="button"><span>进店逛逛</span></div></div>
    </div>
</template>

<script>
export default {
      // 组件名称
    name: 'shopMessage',
    // 组件参数 接收来自父组件的数据
    props: {
        logo : String,
        shopSales : Number,
        shopTotalCategory : Number,
        shopName : String
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
.shop-message{
    background-color:#fff;
    margin-top:3rem;
    padding:8rem 3rem;
    box-shadow: 0 0px 8px 1px rgb(236, 233, 233);
}
.shop-message .shop-image>.logo{
    width:14rem;
    height:14rem;
    display:inline-block;
    /* border-radius:50%; */
    /* border:1px solid rgb(224, 223, 223); */
    vertical-align: middle;
    margin-right:3rem;
}
.shop-message .shop-image>.logo>img{
    width:100%;
    height:100%;
    border-radius: 50%;
}
.shop-message .shop-name{
    font-size:13px;
    color:	#949494;

}
.shop-message .sale-message{
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-top:5rem;
    text-align: center;
}
.shop-message .sale-volume span{
    font-size:21px;
}
.shop-message .sale-volume p{
    font-size:12px;
}
.shop-message .quantity{
    padding:0 7rem;
    border-right:1px solid red;
}
.shop-message .quantity span{
    font-size:21px;
}

.shop-message .quantity p{
    font-size:12px;
}
.shop-message .comment{
    font-size: 12px;
}

.shop-message .comment .mark{
    padding:0 4rem;
}
.shop-message .button{
    text-align: center;
}
.shop-message .button span{
    color:#fff;
    /* font-weight: 600; */
    padding:1rem 5rem;
    text-align: center;
    font-size:12px;
    background:rgb(130, 188, 228);
    border-radius:1rem;
    
}
</style>