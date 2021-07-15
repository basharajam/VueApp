import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home';
import test from '../views/test';
import ProdOne from '../views/ProdOne';
// import { i18n } from "../main.js";
Vue.use(VueRouter)

const routes = [
  
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:test
      },
      {
        path:'/:ProdName',
        name:'ProdOne',
        component:ProdOne
      }


]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router