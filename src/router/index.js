import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies  from 'vue-cookies';
import Home from '../views/home';
import about from '../views/about';
import ProdOne from '../views/ProdOne';
import ProdByCat from '../views/ProdByCat';
import Login from '../views/Login';
import Register from '../views/Register';
import AllCat from '../views/AllCat';
import User from '../views/User';
import store from '../store/index';
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
        path:'/LogOut',
        name:'LogOut',
        beforeEnter: () => {
          
          // to, from, next
          
          // Remove Cookies
          VueCookies.remove('stateCount');
          VueCookies.remove('token');

          //Remove User State 
          store.dispatch('LogOut')

          console.log('Befor Enter LogOut')

        },
        meta:{
          requireAuth:true
        }

      },
      {
        path: '/about',
        name: 'About',
        component:about,
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