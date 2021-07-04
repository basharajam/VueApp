import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
let username = "ck_6a1427f5d435ec0a42b8b14c946f24faaf970c18";
let password = "cs_ec4bd419caf66135ecacc5df3410a7ec03a5fcfb";
let authHeader = `Basic ${window.btoa(`${username}:${password}`)}`;
axios.defaults.headers.common["Authorization"] = authHeader;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
