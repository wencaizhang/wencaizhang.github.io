import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: '小雯工作室',
    description: `这是一个来自法国的 IT 工作室网站，使用nextjs构建的SSR静态网站`,
    imgSrc: 'https://static.webjam.cn/images/202309/cover-xiaowen.png',
    repo: 'https://github.com/wencaizhang/xiaowen_mobile',
    url: 'https://xiaowen-mobile.vercel.app/',
    builtWith: ['Nextjs', 'Typescript', 'TailwindCSS'],
    state: '维护中',
  },
  {
    type: 'self',
    title: 'ActionVue',
    description: '基于 Vue.js 开发的组件库',
    imgSrc: 'https://static.webjam.cn/images/202309/cover-actionvue.webp',
    repo: 'https://github.com/wencaizhang/ActionVue',
    url: 'https://coolfe.fun/ActionVue/',
    builtWith: ['Vue', 'TailwindCSS', 'Typescript'],
    state: '维护中',
  },
  {
    type: 'self',
    title: 'vue-skeleton-antd',
    description: '基于 vue 构建的 ant design 风格骨架屏组件',
    imgSrc: 'https://static.webjam.cn/images/202309/cover-skeletion.webp',
    repo: 'https://github.com/wencaizhang/vue-skeleton-antd',
    url: 'https://coolfe.fun/vue-skeleton-antd/',
    builtWith: ['Vue', 'TailwindCSS', 'Typescript'],
    state: '维护中',
  },
  {
    type: 'self',
    title: 'jQuery.zToolTip',
    description: '造轮子之基于 jquery 的工具提示插件',
    imgSrc: 'https://static.webjam.cn/images/202309/cover-ztooltip.webp',
    repo: 'https://github.com/wencaizhang/jquery.zToolTip',
    url: 'https://coolfe.fun/jquery.zToolTip/',
    builtWith: ['jQuery'],
    state: '维护中',
  },
]
