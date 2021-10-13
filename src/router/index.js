import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home';
import test from '../views/test';
import ProdOne from '../views/ProdOne';
import ProdByCat from '../views/ProdByCat';
import Login from '../views/Login';
import Register from '../views/Register';
import AllCat from '../views/AllCat';
import User from '../views/User';
import store from '../store/index'
import _ from 'lodash';
// import { i18n } from "../main.js";
Vue.use(VueRouter)




const routes = [
  
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path:'/Login',
        name:'Login',
        component:Login,
        meta:{
          requireGuest:true
        }
      },
      {
        path:'/Register',
        name:'Register',
        component:Register,
        meta:{
          requireGuest:true
        }
      },
      {
        path:'/User',
        name:'User',
        component:User
      },
      {
        path: '/about',
        name: 'About',
        component:test,
        meta:{
          requireAuth:true
        }
      },
      {
        path:'/Categories',
        name:'AllCat',
        component:AllCat,
      },
      {
        path:'/:ProdByCat',
        name:'ProdByCat',
        component:ProdByCat
      },
      {
        path:'/:ProdByCat/:ProdName',
        name:'ProdOne',
        component:ProdOne
      },




]

const router = new VueRouter({
  routes,
  mode: 'history'
})


//Guest Guard
router.beforeEach((to, from, next)=>{
  //Check User
  var User=store.getters.User;
  var Token=store.getters.Token;
  if(to.meta.requireGuest && !_.isEmpty(User) && !_.isEmpty(Token)){
    router.push({ name:'Home' });
  }

  //console.log(to.meta.requireAuth)
  console.log('Getter Check',_.isEmpty(User))

  if(to.meta.requireAuth && _.isEmpty(User) && _.isEmpty(Token)){
    router.push({ name:'Login' });
  }
  next()
});

//Auth Guard


export default router