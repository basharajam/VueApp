import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from 'https'
import VueCookie from 'vue-cookies';
import axios from 'axios'
let username = "ck_dd5dacfe7d6b41892c0cbe192f8a553b264afdd6";
let password = "cs_a495e0fca65ed92130dddb0633370dd826658a4c";
let authHeader = `Basic ${window.btoa(`${username}:${password}`)}`;
axios.defaults.headers.common["Authorization"] = authHeader;
axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
Vue.config.productionTip = false
Vue.use(VueCookie)
new Vue({
  router,
  store,
  VueCookie,
  render: h => h(App),
}).$mount('#app')
