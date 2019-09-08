import VueRouter from 'vue-router';
import Home from './pages/Home/Home.vue';
import Hi from './pages/Hi.vue';
import NotFound from './pages/NotFound.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/hi',
      component: Hi
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
