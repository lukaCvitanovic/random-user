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
          meta: {
            title: 'Users List',
          },
          component: () => import('@/views/List'),
        },
        {
          path: 'users/:id(\\d+)',
          name: 'user',
          meta: {
            title: 'User Details',
          },
          component: () => import('@/views/Details'),
        },
        {
          path: '*',
          name: 'not-found',
          meta: {
            title: 'Page Not Found',
          },
          component: () => import('@/views/errors/NotFound'),
        },
      ],
    },
  ],
});

Vue.use(VueRouter);

export default router;
