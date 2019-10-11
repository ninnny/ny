import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC67rUMKejCrGBC-b5u-K8bDLm4sApIwHg",
  authDomain: "backoffice-21981.firebaseapp.com",
  databaseURL: "https://backoffice-21981.firebaseio.com",
  projectId: "backoffice-21981",
  storageBucket: "",
  messagingSenderId: "911728847196",
  appId: "1:911728847196:web:20b11e2eec0a5e8314b999"
};

Vue.config.productionTip = false;
Vue.prototype.$database = firebase.initializeApp(firebaseConfig).database();
// Vue.prototype.$testdfef = { test : "!2332323" };

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
