import VueRouter from 'vue-router';
import Vue from 'vue';

const router = new VueRouter({
  mode: 'history',
  caseSensitive: true,
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/views/common/CommonLayout'),
      children: [
        {
          path: '/',
          name: 'users',
          component: () => import('@/views/List'),
        },
        {
          path: 'users/:id(\\d+)',
          name: 'user',
          component: () => import('@/views/Details'),
        },
      ],
    },
  ],
});

Vue.use(VueRouter);

export default router;
