const { description } = require('../../package')

module.exports = {
  base: '/blog-web/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  // title: 'Vuepress Docs Boilerplate',
  title: '我的博客',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Web',
        link: '/web/',
      },
      {
        text: 'VUE',
        link: '/vue/',
      },
      {
        text: '后端',
        link: '/bigData/',
      },
      {
        text: 'Git',
        link: '/git/',
      },
      {
        text: '安装',
        link: '/install/',
      },
      {
        text: '其他',
        link: '/other/',
      },
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/web/': [
        {
          title: 'Web',
          collapsable: false,
          children: [
            '',
            'vue',
            'vue-history',
            'vuex',
            'vue-cli',
            'vue-router',
            'http',
            'https',
            'agency',
            'axios',
            'javascript-base',
            'js-regexp',
            'js-task',
            'cross-domain',
            'map-reduce',
            'promise',
            'vuepress',
            'webpack',
            'node',
            'log4js',
            'npm',
            'flex',
            'monaco',
            'security',
            'optimize',
            'restful-api',
            'other',
          ]
        }
      ],
      '/vue/' : [
        {
          title: 'VUE',
          collapsable: false,
          children: [
            '',
            'setInterval',
          ]
      }
      ],
      '/bigData/': [
        {
          title: '后端技术总结',
          collapsable: false,
          children: [
            '',
            'mysql',
            'redis',
            'es',
            'kylin',
            'hybrid',
            'python',
            'pandas',
            'django',
            'linux',
            'nginx',
            'aws-s3',
            'hive',
            'hdfs',
            'hbase',
            'spark',
            'luigi',
            'scala',
          ]
        }
      ],
      '/install/': [
        {
          title: '安装',
          collapsable: false,
          children: [
            '',
            'mac',
            'zsh',
            'vs-code',
            'sublime',
            'atom',
            'mac-redis',
            'mac-scala',
            'mac-maven',
            'mac-virtualbox',
            'python',
            'screen',
            'gitbook',
            'virtualbox',
          ]
        }
      ],
      '/other/': [
        {
          title: '其他',
          collapsable: false,
          children: [
            '',
            'navicate',
            'excel',
            'xmind',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
