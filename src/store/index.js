import Vue from 'vue';
import Vuex from 'vuex';
import Products from './modules/Products';
import Categories from './modules/Categories';
import Cart from './modules/Cart';


Vue.use(Vuex);


export default new Vuex.Store({

    modules:{
        Products,
        Categories,
        Cart
    }

})