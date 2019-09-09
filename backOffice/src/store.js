import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money : [
      100,
      200,
      300
    ]
  },
  mutations: {
    setServiceData(state, serviceData) {
      state.money.forEach((money, index) => {
        if (service.id === serviceData.id) {
          Vue.set(state.money, index, serviceData);
        }
      });
    },
  },
  actions: {

  }
})
