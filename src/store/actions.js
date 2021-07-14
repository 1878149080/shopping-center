export default {
    addCart({state,commit},payLoad){

        let current = state.goodsList.find((item,index)=>{
            return item.id === payLoad.id;
        });

        if(current){
            commit('addCounter',current);
        }else{
            payLoad.counter = 1;
            payLoad.check = false;
            commit("addGood",payLoad);
        }
    }
}