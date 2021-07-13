import {
    ADD_COUNTER,
    ADD_GOOD
} from "./mutation-type"


export default {
    [ADD_COUNTER](state,payLoad){
        payLoad.counter++;
    },
    [ADD_GOOD](state,payLoad){
        state.goodsList.push(payLoad)
    }
}