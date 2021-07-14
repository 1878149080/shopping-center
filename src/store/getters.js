export default {
    getLength : state => {
        return state.goodsList.length;
    },
    getList(state){
        console.log(state.goodsList);
        return state.goodsList;
    }
}