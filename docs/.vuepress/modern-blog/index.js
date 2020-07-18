
const getSidebarData = require('./util/getSidebarData')
const removeMd = require('remove-markdown')
const log = console.log

module.exports = (themeConfig, ctx) => {
  const { sourceDir } = ctx
  themeConfig.sidebar = themeConfig.sidebar || { collapsable: true }
  const collapsable = themeConfig.sidebar.collapsable !== false
  const sidebarData = getSidebarData(sourceDir, collapsable)

  if (sidebarData) {
    themeConfig.sidebar = sidebarData
    log('tip: add sidebar data. 侧边栏数据成功生成。')
  } else {
    themeConfig.sidebar = 'auto'
    log('warning: fail to add sidebar data, switch to "auto". 未能添加侧边栏数据，将切换为“auto”。')
  }

  themeConfig = Object.assign(themeConfig, {
    summary: themeConfig.summary || true,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 400,
  })

  // 首页 Banner 图片，速度太慢，所以取消
  // themeConfig.heroImage =
  //   themeConfig.heroImage || 'https://source.unsplash.com/random/800x600'

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        frontmatter: { title: 'Home' },
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
      {
        id: 'project',
        dirname: '_projects',
        path: '/projects/',
        layout: 'Projects',
        itemLayout: 'Project',
        frontmatter: { title: 'Project' },
        itemPermalink: '/projects/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tags/',
        layout: 'Tags', // defaults to `FrontmatterKey.vue`
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 5,
        },
      },
      {
        id: 'category',
        keys: ['category', 'categories'],
        path: '/categories/',
        layout: 'Categories',
        frontmatter: { title: 'category' },
        pagination: {
          lengthPerPage: 5,
        },
      },
    ],
  }

  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions

  const plugins = [
    'disqus',
    'reading-time',
    'flexsearch',
    ['@vuepress/blog', blogPluginOptions],
  ]

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
  }

  /**
   * Generate summary.
   */
  config.extendPageData = function (pageCtx) {
    const strippedContent = pageCtx._strippedContent
    if (!strippedContent) {
      return
    }

    const sanitizedContent = strippedContent
      .trim()
      .replace(/^#+\s+(.*)/, '')

    pageCtx.content = removeMd(sanitizedContent)

    if (themeConfig.summary) {
      if (
        typeof themeConfig.summary === 'object' &&
        themeConfig.summary !== null
      ) {
        // set the default options for the complex summary object
        themeConfig.summary = Object.assign(themeConfig.summary, {
          paragraphs: themeConfig.summary.paragraphs || 0,
          paragraphsSeparator: themeConfig.summary.paragraphsSeparator || '\n\n',
          paragraphsJoiner: themeConfig.summary.paragraphsJoiner || '<br><br>',
          stopSymbol: themeConfig.summary.stopSymbol || '',
          prepend: themeConfig.summary.prepend || '',
          append: themeConfig.summary.append || '',
        })

        // paragraphs
        if (themeConfig.summary.paragraphs > 0) {
          const {
            paragraphs,
            paragraphsSeparator,
            paragraphsJoiner,
          } = themeConfig.summary

          const chunks = pageCtx.content.split(paragraphsSeparator)
          pageCtx.summary = chunks.slice(0, paragraphs).join(paragraphsJoiner)
        }

        // stopSymbol
        if (themeConfig.summary.stopSymbol.length > 0) {
          let pos = pageCtx.content.indexOf(themeConfig.summary.stopSymbol)
          if (pos === -1) {
            pos = themeConfig.summaryLength
          }
          pageCtx.summary = pageCtx.content.slice(0, pos)
        }

        // prepend and/or append
        if (themeConfig.summary.prepend.length > 0) {
          pageCtx.summary = themeConfig.summary.prepend + pageCtx.summary
        }

        if (themeConfig.summary.append.length > 0) {
          pageCtx.summary += themeConfig.summary.append
        }
      } else if (themeConfig.summary) {
        pageCtx.summary = pageCtx.content
          .slice(0, themeConfig.summaryLength) + ' ...'
      }
    };
  }

  return config
}
