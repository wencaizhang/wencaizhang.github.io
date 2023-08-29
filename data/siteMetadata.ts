export let siteMetadata = {
  siteUrl: 'https://www.leohuynh.dev',
  siteRepo: 'https://github.com/wencaizhang/wencaizhang.github.io/tree/nextjs',
  siteLogo: '/static/images/logo.jpg',
  title: "前端果酱开发历险记- Wencai's coding journey",
  author: 'wencaizhang',
  fullName: 'WebJAM',
  location: '[::1]:443 - China',
  locationIcon: 'flag-vietnam',
  position: 'Full Stack Web Developer',
  company: '',
  companySite: '',
  email: 'zwcxyz@gmail.com',
  github: 'https://github.com/wencaizhang',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  locale: 'en-US',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  x: 'https://x.com/xxxx',
  profileCover: 'https://static.webjam.cn/images/bg/wew.png',
  analyticsURL: '',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'wencaizhang',
    linkedin: '',
    x: '',
    twitter: '',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
