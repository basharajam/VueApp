import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from 'https';
import VueCookie from 'vue-cookies';
import Vuelidate from 'vuelidate'
import VueMq from 'vue-mq'
import VueCryptojs from 'vue-cryptojs'
import VueI18n from 'vue-i18n';
import lang from '../lang/index';
import axios from 'axios'
import LoadScript from 'vue-plugin-load-script';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ClientTable, } from 'vue-tables-2';
import VueProgressBar from 'vue-progressbar'
import './assets/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/custom.scss';


axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
Vue.config.productionTip = false




Vue.use(VueCryptojs)
Vue.use(VueCookie)
Vue.use(Vuelidate)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ClientTable,{},false,'bootstrap4',{});
Vue.use(LoadScript);
Vue.use(VueMq,{
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})
Vue.use(VueProgressBar, {
  color: '#f6601a',
  failedColor: 'red',
  height: '12px'
})


Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'ar',
  fallbackLocale: 'en',
  messages:lang
});
new Vue({
  router,
  store,
  VueCookie,
  i18n,
  render: h => h(App),
}).$mount('#app')
