import VueRouter from 'vue-router';
import Home from './components/pages/Home/Home.vue';
import Articles from './components/pages/Articles/Articles.vue';
import Bestiary from './components/pages/Bestiary/Bestiary.vue';
import Login from './components/pages/Login/Login.vue';
import LostPage from './components/pages/LostPage.vue';

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
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: LostPage
    }
  ]
})
