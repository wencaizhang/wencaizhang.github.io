module.exports = {
  title: '酷前端',
  description: '享受编程和技术所带来的快乐 – Coding Your Ambition',
  theme: require.resolve('./modern-blog/'), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
  themeConfig: {
    summaryLength: 100,
    translations: {
      read_more: 'Keep reading!',
      read_this_post: 'Read this post now!',
    },

    // cookies: {
    //   theme: 'dark-lime',
    //   buttonText: 'Got it!',
    //   message: 'We use cookies!',
    // },

    summary: true,

    // Example of advanced summary usage
    /*
    summary: {
      // Use the first two paragraphs
      paragraphs: 2,

      // Let's assume that a paragraph is anything that ends with "..." and a new line
      paragraphsSeparator: "...\n",

      // And let's assume that we want to join back the extracted paragraphs with an empty space.
      paragraphsJoiner: "",

      // If we didn't want to use the "paragraphs" functionality, and instead we
      // want to extract a summary up until the first occurrence of a text, we'd
      // use the "stopSymbol" functionality. Let's assume that we want to get
      // all the text up until the first ";" followed by a new line appears in
      // our text.
      stopSymbol: ";\n",

      // How about we add an emoji at the beginning of our summary?
      prepend: "🔈",

      // ... what about at the end?
      append: "📖",
    },
    */
    directories: [
      {
        id: 'ohmyjs',
        dirname: '_oh-my-js',
        path: '/oh-my-js/',
        layout: 'Docs',
        itemLayout: 'Doc',
        // layout: 'Projects',
        // itemLayout: 'Project',
        frontmatter: { title: 'docs' },
        itemPermalink: '/oh-my-js/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
      {
        id: 'api',
        dirname: '_api',
        path: '/api',
        layout: 'ApiLayout',
        itemLayout: 'ApiPage',
        frontmatter: { title: 'Api' },
        itemPermalink: '/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
    ],
    modifyBlogPluginOptions (defaultBlogPluginOptions) {
      defaultBlogPluginOptions.directories.find(item => item.id === 'post')
        .itemPermalink = '/:year-:month/:slug'
      defaultBlogPluginOptions.directories.push(
        {
          id: 'ohmyjs',
          dirname: '_oh-my-js',
          path: '/oh-my-js/',
          layout: 'Docs',
          itemLayout: 'Doc',
          // layout: 'Projects',
          // itemLayout: 'Project',
          frontmatter: { title: 'docs' },
          itemPermalink: '/oh-my-js/:slug',
          pagination: {
            lengthPerPage: 10,
          },
        },
        {
          id: 'api',
          dirname: '_api',
          path: '/api',
          layout: 'ApiLayout',
          itemLayout: 'ApiPage',
          frontmatter: { title: 'Api' },
          itemPermalink: '/api/:slug',
          pagination: {
            lengthPerPage: 10,
          },
        },
      )
      return defaultBlogPluginOptions
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'el-icon-house',
      },
      {
        text: 'Projects',
        link: '/projects/',
        icon: 'el-icon-folder',
      },
      {
        text: 'Oh My JS',
        link: '/oh-my-js/',
        icon: 'el-icon-folder',
      },
    ],
    // Let's say that we want to add a small message at the beginning or at the
    // end of each post. This is the place!
    posts: {
      prepend: "Hi, I hope you'll <i>enjoy</i> this post!",
      append: "Hi, I hope you've <b>enjoyed</b> this post!",
    },
    // disqus: 'disquswebsiteshortname', // if you want to incorporate Disqus for comments replace this value else just get rid of it
    about: {
      fullName: '前端果酱',
      bio: 'I am a passionate Software Engineer, I love HTML ♥ CSS ♥ JavaScript ♥ Vue.js ♥ ...',
      image: 'https://cdn.jsdelivr.net/gh/wencaizhang/static/avatar.png',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/wencaizhang',
        },
        // {
        //   type: 'instagram',
        //   link: 'https://instagram.com',
        // },
        // {
        //   type: 'linkedin',
        //   link: 'https://linkedin.com',
        // },
        // {
        //   type: 'twitter',
        //   link: 'https://twitter.com',
        // },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
  plugins: [
    'crisp',
    'seo',
    'smooth-scroll',
    'reading-progress',
    'back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    'social-share',
    '@vuepress/google-analytics',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://webjam.cn',
      },
    ],
  ],
}
