import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fad Ouro Agoro',
  tagline: 'Senior .NET Developer Analyst · Accenture · Azure',
  favicon: 'img/favicon.ico',

  url: 'https://fadoul1.github.io',
  baseUrl: '/',

  organizationName: 'fadoul1',
  projectName: 'fad-portfolio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {type: ['rss', 'atom'], xslt: true},
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Fad Ouro Agoro',
      hideOnScroll: true,
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/experience', label: 'Experience', position: 'left'},
        {to: '/skills', label: 'Skills', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/fadoul1',
          position: 'right',
          className: 'navbar-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {label: 'About', to: '/about'},
            {label: 'Experience', to: '/experience'},
            {label: 'Skills', to: '/skills'},
          ],
        },
        {
          title: 'Content',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Contact', to: '/contact'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/fadoul1'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/fad-ouro-agoro/'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Fad Ouro Agoro. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'bash', 'json', 'yaml', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
