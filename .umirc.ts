import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/home/index' },
        { exact: true, path: '/welcome', component: '@/pages/welcome/index' },
        { exact: true, path: '/list', component: '@/pages/list/index' },
        { exact: true, path: '/detail', component: '@/pages/detail/index' },
        { exact: true, path: '/about', component: '@/pages/about/index' },
        // { exact: true, path: '/users', component: '@/pages/users' },
      ],
    },
  ],
});
