import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  routes: [
    { exact: true, path: '/welcome', component: '@/pages/welcome/index', title: '欢迎 - 善恩学院' },
    { exact: true, path: '/', component: '@/pages/home/index', title: '首页 - 善恩学院' },
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        // { exact: true, path: '/', component: '@/pages/home/index', title: '首页 - 善恩学院' },
        { exact: true, path: '/list', component: '@/pages/list/index', title: '名师堂 - 善恩学院' },
        { exact: true, path: '/detail', component: '@/pages/detail/index', title: '详情 - 善恩学院' },
        { exact: true, path: '/about', component: '@/pages/about/index', title: 'QA - 善恩学院' },
        { exact: true, path: '/latest', component: '@/pages/latest/index', title: '最新课程 - 善恩学院' },
        { exact: true, path: '/contact', component: '@/pages/contact/index', title: '联系善恩学院 - 善恩学院' },
        { exact: true, path: '/record/tutor/:tid', component: '@/pages/record/tutor', title: '最新课程 - 善恩学院' },
        { exact: true, path: '/record/student', component: '@/pages/record/student', title: '最新课程 - 善恩学院' },
      ],
    },
  ],
  chainWebpack(config) {
    config.module.rule('file').test(/.mp4$/).use('file-loader').loader('file-loader');
  },
  hash: true,
  proxy: {
    '/api': {
      target: 'https://www.bstcine.com',
      changeOrigin: true,
    },
  },
  fastRefresh: {},
  exportStatic: {},
  copy: [
    {
      from: 'src/CNAME',
      to: '.',
    },
    {
      from: 'src/favicon.ico',
      to: '.',
    },
  ],
});
