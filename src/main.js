import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from 'https';
import VueCookie from 'vue-cookies';
import Vuelidate from 'vuelidate'
import VueMq from 'vue-mq'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import VueI18n from 'vue-i18n';
// import lang from '../lang';
import axios from 'axios'
let username = "ck_dd5dacfe7d6b41892c0cbe192f8a553b264afdd6";
let password = "cs_a495e0fca65ed92130dddb0633370dd826658a4c";
let authHeader = `Basic ${window.btoa(`${username}:${password}`)}`;
axios.defaults.headers.common["Authorization"] = authHeader;
axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
Vue.config.productionTip = false

Vue.use(VueCookie)
Vue.use(Vuelidate)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueMq,{
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})

// Vue.use(VueI18n);
// export const i18n = new VueI18n({
//   locale: 'ar',
//   fallbackLocale: 'en',
//   lang
// });
new Vue({
  router,
  store,
  VueCookie,
  render: h => h(App),
}).$mount('#app')
