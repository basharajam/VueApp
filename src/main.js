import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
let username = "ck_4a0c08cd61f3efbd00e151f0b28eb55eaf638851";
let password = "cs_1c54b351f8a30b348270ffb2e2f2e2a9afef717f";
let authHeader = `Basic ${window.btoa(`${username}:${password}`)}`;
axios.defaults.headers.common["Authorization"] = authHeader;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
