// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Surya Sourcebook',
  tagline: 'Unlocking the power of self-discovery',
  url: 'https://suryakantamangaraj.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Surya Raj', // Usually your GitHub org/user name.
  projectName: 'Personal Wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/suryakantamangaraj/Wiki/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Surya Sourcebook',
        logo: {
          alt: 'Surya Sourcebook Logo',
          src: 'img/logo.svg',
        },
        /* liveCodeBlock: {
          playgroundPosition: 'bottom',
        }, */
        items: [
          {
            href: 'https://suryaraj.me',
            label: 'suryaraj.me',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
         ],
        copyright: `©2020 - ${new Date().getFullYear()} Surya Raj | Surya Sourcebook • Curated with ❤️ by Surya`,
      },
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

export default {
  themes: ['@docusaurus/theme-mermaid'],
  //plugins: ['@docusaurus/theme-live-codeblock'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
