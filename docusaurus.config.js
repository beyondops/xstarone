// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '智远星',
  tagline: '智慧平台，远航万里，星辰大海',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://beyondops.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/xstarone/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'beyondops', // Usually your GitHub org/user name.
  projectName: 'xstarone', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '智远星',
        logo: {
          alt: '智远星',
          src: 'img/logo-icon.png',
        },
        items: [
          {to: '/', label: '首页', position: 'left'},
          {to: '/products', label: '产品', position: 'left'},
          {to: '/solutions', label: '解决方案', position: 'left'},
          {to: '/services', label: '服务与支持', position: 'left'},
          {to: '/blog', label: '新闻动态', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '使用指南',
          },
          {to: '/about-us', label: '关于我们', position: 'left'},
          {to: '/join-us', label: '招商加盟', position: 'left'},
          
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '公司',
            items: [
              {
                label: '关于我们',
                to: '/about-us',
              },
              {
                label: '招商加盟',
                to: '/join-us',
              },
              {
                label: '服务与支持',
                to: '/solutions',
              },
            ],
          },
          {
            title: '文档',
            items: [
              {
                label: '产品',
                to: '/products',
              },
              {
                label: '解决方案',
                to: '/solutions',
              },
              {
                label: '使用指南',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '新闻动态',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 智远星`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
