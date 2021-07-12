import BackTop from "components/content/back-top.vue"


const top = {
    data(){
        return {
            show : true
        }
    },
    components : {
        BackTop
    },
    methods : {
        //返回顶部函数
        backtop(){
            this.$refs.myscroll.top(0,0,1000)
        },
    }
}
export default top