import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutation"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)


const state = {
  goodsList : []
}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
