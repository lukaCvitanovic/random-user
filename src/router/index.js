import VueRouter from 'vue-router';
import Vue from 'vue';

const routes = [];

const router = new VueRouter({
  mode: 'history',
  caseSensitive: true,
  routes,
});

Vue.use(VueRouter);

export default router;
