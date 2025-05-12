import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/index.vue';
import App from '../views/app/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'HomeView',
    },
  },
  {
    path: '/app',
    name: 'App',
    component: App,
    meta: {
      title: 'App',
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
