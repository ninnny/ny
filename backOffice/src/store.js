import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: { title: "", cost: 0 }, 
    modal_money : [
      { title : "", cost : 0},
      { title : "", cost : 0}
    ],
    bank : [],
    fetch_flag : false,
  },
  mutations: {
    setMoney(state, obj) {
      this.state.modal_money[obj.idx].cost = obj.value;
    },
    setTitle(state, obj) {
      this.state.modal_money[obj.idx].title = obj.title;
    },
  },
  actions: {

  }
})
