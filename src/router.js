import VueRouter from 'vue-router';
import Home from './pages/Home/Home.vue';
import Bestiary from './pages/Bestiary/Bestiary.vue';
import LostPage from './pages/LostPage.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/bestiary',
      component: Bestiary
    },
    {
      path: '*',
      component: LostPage
    }
  ]
})
