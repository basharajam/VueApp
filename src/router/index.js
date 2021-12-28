import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies  from 'vue-cookies';
import store from '../store/index';
import _ from 'lodash';


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
   
      //redirect to home if route ! home
      if(router.currentRoute.name != 'Home' ){
        router.push({ name:'Home' })
      }
   
    },
    meta:{
      requireAuth:true
    }

  },
  {
    path:'/Search/:term',
    name:'Search',
    component:lazyLoad('search')
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
    path:'/Shipment',
    name:'Shipment',
    component:lazyLoad('Shipment'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/Billing',
    name:'Billing',
    component:lazyLoad('Billing'),
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
    path:'/product/:ProdName',
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
  mode: 'history',
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