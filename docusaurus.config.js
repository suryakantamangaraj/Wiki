// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Surya Raj | Digital Garden',
  tagline: 'Unlocking the power of self-discovery',
  url: 'https://wiki.suryraj.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Surya Raj', // Usually your GitHub org/user name.
  projectName: 'Personal Wiki', // Usually your repo name.
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
          editUrl: 'https://github.com/suryakantamangaraj/Wiki/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'personal wiki, digital garden, Surya Raj, Suryakanta Mangaraj, RF Engineering, electronics, AI, ML, software development' },
      { name: 'description', content: 'This is the personal knowledge base of Surya Raj, also known as Suryakanta Mangaraj, featuring notes on RF Engineering, coding, and electronics.' }
    ],

    navbar: {
      title: 'Surya Sourcebook',
      logo: {
        alt: 'Surya Sourcebook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://suryaraj.com',
          label: 'suryaraj.com',
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
      additionalLanguages: ['bash', 'diff', 'json'],
      theme: lightTheme,
      darkTheme: darkTheme,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
      options: {
        maxTextSize: 50,
      },
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: ['en'],
      },
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
};

module.exports = config;
