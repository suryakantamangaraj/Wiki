const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const mdxReact = require('@mdx-js/react');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Surya Sourcebook',
  tagline: 'Unlocking the power of self-discovery',
  url: 'https://suryakantamangaraj.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Surya Raj', // Usually your GitHub org/user name.
  projectName: 'Personal Wiki', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          include: ['**/*.md', '**/*.mdx'],
          remarkPlugins: [mdxReact],
          editUrl: 'https://github.com/suryakantamangaraj/Wiki/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Surya Sourcebook',
        logo: {
          alt: 'Surya Sourcebook Logo',
          src: 'img/logo.svg',
        },
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
        links: [],
        copyright: `©2020 - ${new Date().getFullYear()} Surya Raj | Surya Sourcebook • Curated with ❤️ by Surya`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {}, // Ensure this is an object
      },
    }),
};

module.exports = config;
