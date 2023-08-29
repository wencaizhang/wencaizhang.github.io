import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'Fox Kit - Shopify app',
    description: `The upsells and boost conversion tools that is built to support Minimog theme.`,
    imgSrc: '/static/images/performance.jpg',
    repo: 'https://github.com/wencaizhang',
    url: 'https://apps.shopify.com/foxkit?ref=leohuynh.dev',
    demo: 'https://webjam.cn',
    builtWith: ['Koa.js', 'JWT', 'MongoDB', 'Polaris'],
    state: '维护中',
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/server.jpg',
    repo: 'https://github.com/wencaizhang',
    demo: 'https://webjam.cn',
    builtWith: ['Next.js', 'TailwindCSS', 'Typescript'],
    state: '开发中',
  },
]
