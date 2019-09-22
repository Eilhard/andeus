import VueRouter from 'vue-router';
import Home from './components/pages/Home/Home.vue';
import Articles from './components/pages/Articles/Articles.vue';
import Bestiary from './components/pages/Bestiary/Bestiary.vue';
import User from './components/pages/User/User.vue';
import Login from './components/pages/Login/Login.vue';
import LostPage from './components/pages/LostPage.vue';
import store from './store/index.js';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/bestiary',
      component: Bestiary
    },
    {
      path: '/user',
      component: User,
      beforeEnter: function(to, from, next) {
        if (store.state.auth) {
          next();
        }else{
          next('/');
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: function(to, from, next) {
        if (store.state.auth) {
          next('/');
        }else{
          next();
        }
      }
    },
    {
      path: '*',
      component: LostPage
    }
  ]
})
