<template>
    <div class="detail">
        <detail-nav @active="toPosition" ref='title'></detail-nav>
        <my-scroll class="wrapper"
        @scrollevent="changePosition"
        ref='myscroll'>

            <main-swiper :swiperImage="swiper"></main-swiper>

            <shop-info 
            ref="info"
            :shopName="shopName"
            :price="price"
            :oldPrice="oldPrice"
            :saleVolume="saleVolume"
            :collection="collection"
            :release="release"
            :description="description"></shop-info>

            <shop-message
            ref="message"
            :shopSales="shopSales"
            :shopName="shopName"
            :shopTotalCategory="shopTotalCategory"
            :logo="logo"></shop-message>


            <shop-photo
            ref="photo"
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
            currentIndex : 0,
            themeY : []
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
        },
        toPosition(index){
            this.$refs.myscroll.scroll.scrollTo(0,this.themeY[index],300);
        },
        changePosition(position){
            // console.log(position);
            for(var i=0;i<this.themeY.length;i++){
                if((i<this.themeY.length-1 && position.y<=this.themeY[i] && position.y>=this.themeY[i+1]) || (i==this.themeY.length-1 && position.y<=this.themeY[i])){
                    this.$refs.title.currentIndex = i;
                }
                if(position.y>=0){
                    this.currentIndex = 0;
                }
            }
            this.scrollevent(position);
        }
    },
    created(){
        // 获取id
        this.getId();
        // 获取数据
        this.detailData();
    },
    mounted(){
    },
    updated(){
        this.$nextTick(()=>{
            this.themeY = [];
            this.themeY.push(0);
            this.themeY.push(-this.$refs.info.$el.offsetTop);
            this.themeY.push(-this.$refs.message.$el.offsetTop);
            this.themeY.push(-this.$refs.photo.$el.offsetTop);
        })
    }
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