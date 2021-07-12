<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <my-scroll class="wrapper"
        @scrollevent="scrollevent"
        ref='myscroll'>

            <main-swiper :swiperImage="swiper"
            ></main-swiper>

            <shop-info 
            :shopName="shopName"
            :price="price"
            :oldPrice="oldPrice"
            :saleVolume="saleVolume"
            :collection="collection"
            :release="release"
            :description="description"></shop-info>

            <shop-message
            :shopSales="shopSales"
            :shopName="shopName"
            :shopTotalCategory="shopTotalCategory"
            :logo="logo"></shop-message>
            <shop-photo
            :showImage="showImage"
            :title="title"
            ></shop-photo>
        </my-scroll>
        <back-top @click.native="backtop" :class="{show:show}"></back-top>
    </div>
</template>

<script>
// 导入子组件
import detailNav from "./children/detail-nav.vue"
import ShopInfo from "./children/shopInfo.vue"
import ShopMessage from "./children/shopMessage.vue"
import shopPhoto from "./children/shopPhoto.vue"

// 导入项目公共组件
// import MySwiper from "components/content/myswiper.vue"
import MainSwiper from "components/content/main-swiper.vue"

// 导入混入对象
import top from "mixin/top.js"
import scroll from "mixin/scroll.js"

// 导入借口文件
import {detailData} from "api/detail"
export default {
      // 组件名称
    name: 'detail',
    mixins : [top,scroll],
    // 组件参数 接收来自父组件的数据
    props: {},
      // 局部注册的组件
    components: {
        detailNav,
        MainSwiper,
        ShopInfo,
        ShopMessage,
        shopPhoto,
    },
      // 组件状态值
    data () {
        return {
            id : null,
            swiper : [],
            description : '',
            shopName : '',
            price : 0,
            oldPrice : 0,
            saleVolume : 0,
            collection : 0,
            release : 24,

            logo : '',
            shopSales : 0,
            shopTotalCategory : 0,

            title : '',
            showImage : [],
        }
    },
    methods : {
        // 获取数据方法
        detailData(){
            detailData(this.id).then(res=>{
                // console.log(res);
                this.shopName = res.data.shopName;
                this.description = res.data.description;
                this.price = res.data.price;
                this.oldPrice = res.data.oldPrice;
                this.saleVolume = res.data.saleVolume;
                this.collection = res.data.collection;
                this.release = res.data.release;
                this.swiper.push(...res.data.swiper);

                this.logo = res.data.logo;
                this.shopSales = res.data.shopSales;
                this.shopTotalCategory = res.data.shopTotalCategory;
                this.showImage = res.data.showImage;
                this.title = res.title;
                // console.log(this.swiper);
            });
        },
        getId(){
            this.id = this.$route.query.id;
        }
    },
    created(){
        // 获取id
        this.getId();
        // 获取数据
        this.detailData();
    },
}
</script>
<style scoped>
.wrapper{
    height:calc(100vh - 13.0666667rem - 11.7333333rem);
    overflow: hidden;
}
.show{
    opacity: 0;
}
</style>