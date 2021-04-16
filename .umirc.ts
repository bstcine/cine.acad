import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  routes: [
    {
      exact: true,
      path: '/welcome',
      component: '@/pages/welcome/index',
      title: '欢迎 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
    },
    {
      exact: true,
      path: '/',
      component: '@/pages/home/index',
      title: '首页 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
    },
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: true,
          path: '/detail',
          component: '@/pages/detail/index',
          title: '详情 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
        {
          exact: true,
          path: '/tutor/form',
          component: '@/pages/tutor/form',
          title: '填写报告 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
        {
          exact: true,
          path: '/tutor/feedback',
          component: '@/pages/tutor/feedback',
          title: '填写反馈 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
        {
          exact: true,
          path: '/list',
          component: '@/pages/list/index',
          title: '名师堂 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
        {
          exact: true,
          path: '/about',
          component: '@/pages/about/index',
          title: 'QA - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
        {
          exact: true,
          path: '/latest',
          component: '@/pages/latest/index',
          title: '最新课程 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
        {
          exact: true,
          path: '/contact',
          component: '@/pages/contact/index',
          title: '联系善恩学院 - 善恩学院 - 美国大学升学顾问, 英语阅读和写作, AP考试, 美高学科辅导',
        },
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
