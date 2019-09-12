import VueRouter from 'vue-router';
import Home from './components/pages/Home/Home.vue';
import Bestiary from './components/pages/Bestiary/Bestiary.vue';
import LostPage from './components/pages/LostPage.vue';

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
