module.exports = {
  title: '酷前端',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('./modern-blog/'), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
  summaryLength: 700,
  themeConfig: {
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
    modifyBlogPluginOptions (defaultBlogPluginOptions) {
      defaultBlogPluginOptions.directories.push({
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
      })
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
    disqus: 'disquswebsiteshortname', // if you want to incorporate Disqus for comments replace this value else just get rid of it
    about: {
      fullName: 'Ahmad Mostafa',
      bio: 'I am a passionate Software Engineer, I love Vue.js ♥ ...',
      image: 'https://www.ahmadmostafa.com/images/bg_1.png',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/z3by',
        },
        {
          type: 'instagram',
          link: 'https://instagram.com',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com',
        },
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
    sidebar: {
      '/_oh-my-js/': [
        {
          title: 'Array-ES3',
          collapsable: true,
          children: [
            './01-array-es3/00-indexxx',
            './01-array-es3/01-Array.prototype.concat',
            './01-array-es3/02-Array.prototype.join',
            './01-array-es3/03-Array.prototype.push',
            './01-array-es3/04-Array.prototype.pop',
            './01-array-es3/05-Array.prototype.shift',
            './01-array-es3/06-Array.prototype.unshift',
            './01-array-es3/07-Array.prototype.slice',
            './01-array-es3/08-Array.prototype.splice',
            './01-array-es3/09-Array.prototype.reverse',
            './01-array-es3/10-Array.prototype.sort',
          ],
        },
        {
          title: 'Array-ES5',
          collapsable: true,
          children: [
            './02-array-es5/00-index',
            './02-array-es5/01-Array.prototype.forEach',
            './02-array-es5/02-Array.prototype.map',
            './02-array-es5/03-Array.prototype.filter',
            './02-array-es5/04-Array.prototype.some',
            './02-array-es5/05-Array.prototype.every',
            './02-array-es5/06-Array.prototype.indexOf',
            './02-array-es5/07-Array.prototype.lastIndexOf',
            './02-array-es5/08-Array.prototype.reduce',
            './02-array-es5/09-Array.prototype.reduceRight',
          ],
        },
        {
          title: 'Array-ES6',
          collapsable: true,
          children: [
            './03-array-es6/00-home',
            './03-array-es6/01-Array.from',
            './03-array-es6/02-Array.of',
            './03-array-es6/10-Array.isArray',
            './03-array-es6/03-Array.prototype.copyWithin',
            './03-array-es6/04-Array.prototype.find',
            './03-array-es6/05-Array.prototype.findIndex',
            './03-array-es6/06-Array.prototype.fill',
            './03-array-es6/07-Array.prototype.entries',
            './03-array-es6/08-Array.prototype.keys',
            './03-array-es6/09-Array.prototype.values',
            './03-array-es6/10-Array.prototype.includes',
          ],
        },
        {
          title: 'String',
          collapsable: true,
          children: [
            './04-string/000-transform-string-to-tag',
            './04-string/001-String.prototype-toLowerCase-toUpperCase',
            './04-string/002-String.prototype.slice',
            './04-string/003.String.prototype.split',
            './04-string/004.String.prototype.match',
            './04-string/005-String.prototype.trim',
            './04-string/006-String.prototype.includes',
            './04-string/008-String.prototype.repeat',
            './04-string/009-String.prototype-padstart-padend',
            './04-string/04-String.prototype.search',
            './04-string/05-String.prototype.match',
            './04-string/06-String.prototype.replace',
          ],
        },
        {
          title: 'Object',
          collapsable: true,
          children: [
            './05-object/01-Object.prototype.hasOwnProperty',
            './05-object/02-Object.keys',
            './05-object/03-Object.values',
            './05-object/04-Object.entries',
            './05-object/05-Object.assign',
            './05-object/06-Object.is',
            './05-object/07-Object.defineProperty',
            './05-object/08-Object.create',
          ],
        },
        {
          title: 'Regexp',
          collapsable: true,
          children: [
            './06-regexp/00-Regexp-basic',
            './06-regexp/0-正则表达式预查',
            './06-regexp/01-Regexp.prototype.lastIndex',
            './06-regexp/02-Regexp.prototype.test',
            './06-regexp/03-Regexp.prototype.exec',
            './06-regexp/100-regexp-demos',
          ],
        },
      ]
      ,
    },
  },
  plugins: [
    'crisp',
    'seo',
    'smooth-scroll',
    'reading-progress',
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
        hostname: 'https://vp-modern.z3by.com',
      },
    ],
  ],
}
