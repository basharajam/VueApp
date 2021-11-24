// import Home from '../views/home';
// import about from '../views/about';
// import ProdOne from '../views/ProdOne';
// import ProdByCat from '../views/ProdByCat';
// import Login from '../views/Login';
// import Register from '../views/Register';
// import AllCat from '../views/AllCat';
// import User from '../views/User';
// import CheckOut from '../views/Checkout';
// import ProdByTag from '../views/ProdByTag';
// import Rate from '../views/rate';
// import Orders from '../views/Orders.vue';
// import test from '../views/test';
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies  from 'vue-cookies';
import store from '../store/index';
import _ from 'lodash';
// import { i18n } from "../main.js";
Vue.use(VueRouter)
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}




const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('home')
  },
  {
    path:'/Login',
    name:'Login',
    component:lazyLoad('Login'),
    meta:{
      requireGuest:true
    }
  },
  {
    path:'/Register',
    name:'Register',
    component:lazyLoad('Register'),
    meta:{
      requireGuest:true
    }
  },
  {
    path:'/User',
    name:'User',
    component:lazyLoad('User'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/LogOut',
    name:'LogOut',
    beforeEnter: () => {
      
      // Remove Cookies
      VueCookies.remove('stateCount');
      VueCookies.remove('token');
      //Remove User State 
      store.dispatch('LogOut')
    },
    meta:{
      requireAuth:true
    }

  },
  {
    path:'/Rate',
    name:'Rate',
    component:lazyLoad('rate')
  },
  {
    path: '/about',
    name: 'About',
    component:lazyLoad('about'),
  },
  {
    path:'/Categories',
    name:'AllCat',
    component:lazyLoad('AllCat'),
  },
  {
    path:'/Checkout',
    name:'Checkout',
    component:lazyLoad('Checkout'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/Orders',
    name:'Orders',
    component:lazyLoad('Orders'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/category/:ProdByCat',
    name:'ProdByCat',
    component:lazyLoad('ProdByCat')
  },
  {
    path:'/tag/:ProdByTag',
    name:'ProdByTag',
    component:lazyLoad('ProdByTag')
  },
  {
    path:'/:ProdByCat/:ProdName',
    name:'ProdOne',
    component:lazyLoad('ProdOne')
  },
  {
    path:'/test',
    name:'test',
    component:lazyLoad('test')
  }
      




]

const router = new VueRouter({
  routes,
  mode: 'history'
})


//Check Cookie
// router.beforeEach((to,from,next)=>{


  
//     // if(Token && UserId){

      
//     //   // store.commit('User',UserId)
//     //   // store.commit('Token',Token)

//     //   // router.push({ name:'Home' });

//     // }
//     // else{
//     //   next();
//     // }

// })


//Guest Guard
router.beforeEach((to, from, next)=>{

  //Check User From Cookies
  var UserCookie=VueCookies.get('stateCount');
  var TokenCookie=VueCookies.get('token');

  if(to.meta.requireGuest && !_.isEmpty(UserCookie) && !_.isEmpty(TokenCookie)){
    router.push({ name:'Home' });
  }
  
  //Check User From State
  var User=store.getters.User;
  var Token=store.getters.Token;
  if(to.meta.requireGuest && !_.isEmpty(User) && !_.isEmpty(Token)){
    router.push({ name:'Home' });
  }

  if(to.meta.requireAuth && _.isEmpty(User) && _.isEmpty(Token)){
    router.push({ name:'Login' });
  }
  next()

});




//Auth Guard


export default router