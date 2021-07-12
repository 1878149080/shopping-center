import MyScroll from "components/content/myscroll.vue"

const scroll = {
    components : {
        MyScroll
    },
    data(){
        return {
            // show : true
        }
    },
    updated(){
        this.$refs.myscroll.scroll.refresh();
    },
    activated(){
        // 在这里刷新，解决了长时间不会home，无法滚动的情况
        this.$refs.myscroll.scroll.refresh();
        // console.log('进入home');
    },
    methods : {
        // 记录滚动位置函数
        scrollevent(position){
            this.show =  position.y>-500;
        }
    }
}

export default scroll