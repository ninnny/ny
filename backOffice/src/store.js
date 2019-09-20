import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money : [
      0,
      0
    ]
  },
  mutations: {
    setMoney(state, obj) {
      Vue.set(state.money, obj.idx, obj.value);
    },
  },
  actions: {

  }
})
