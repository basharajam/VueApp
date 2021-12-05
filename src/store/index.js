import Vue from 'vue';
import Vuex from 'vuex';
import Products from './modules/Products';
import Terms from './modules/Terms';
import Cart from './modules/Cart';
import User from './modules/User';
import config from './modules/app';


Vue.use(Vuex);


export default new Vuex.Store({

    modules:{
        Products,
        Terms,
        Cart,
        User,
        config
    }
})