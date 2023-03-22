// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ENS Support',
  tagline: 'ENS Support Documentation',
  url: 'https://support.ens.domains',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/enssite_logo.svg',
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    '@docusaurus/plugin-ideal-image',
    /* Local redirect test, not needed now (using server-side cloudflare _redirect)
    ['@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/docs')) {
            return [
              existingPath.replace('/', '/docs'),
            ];
          }
          return undefined;
        },
      }
    ],
    */
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dnstoens',
        path: 'dnstoens',
        routeBasePath: 'dnstoens',
        sidebarPath: require.resolve('./sidebarsDNStoENS.js'),
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
	// docusaurus-theme-search-typesense theme needs to be added to use typesense search
  themes: ['@docusaurus/theme-mermaid'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ensdomains', // Usually your GitHub org/user name.
  projectName: 'ens-support-docs', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          editUrl:
            'https://github.com/ensdomains/ens-support-docs/tree/main/',
        },
        pages: {
          routeBasePath: "/pages",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ensdomains/ens-support-docs/tree/main/',
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
	    /*
      typesense: {
        typesenseCollectionName: 'ens-supportdocs',
        typesenseServerConfig: {
          nodes: [
            {
              host: 'ef8x0poclr65yb2ip-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'Bcdow1fCZdOEUz7UX5MOZtlkP0LSrgQr',
        },
        typesenseSearchParameters: {},
      },
      */
    tableOfContents: {
	    minHeadingLevel: 2,
	    maxHeadingLevel: 4,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    metadata: [{
      name: 'keywords',
      content: 'ens, ens support, support docs, ens support docs, ens help, support, documentation, help, how-to, howto'
    }],
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(50, 50, 50)'
      },
    },
    mermaid: {
      options: {
        mirrorActors: true,
        messageAlign: 'center',
        messageFontWeight: 'bold',
        messageMargin: 0,
      },
    },
    algolia: {
          appId: 'NDEZSZ5DVQ',
          apiKey: '019821478403538a5fe9ada9e424a320',
          indexName: 'supportindex',
        },
      navbar: {
        hideOnScroll: true,
        title: 'ENS Support',
        logo: {
          alt: 'ENS Logo',
          src: 'img/enssite_logo.svg',
          /* srcDark: 'img/newsite-logo-dark.svg', */
        },
        items: [
        /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Support Docs',
          },
          {
            to: '/blog',
            label: 'Updates',
            position: 'left'
          }, */
		/*
	  {
	    href: 'https://docs.ens.domains',
	    label: 'Developer Docs',
	    position: 'left',
	  },
	  {
	    href: 'https://docs.ens.domains/v/governance',
	    label: 'Governance Docs',
	    position: 'left',
	  },
	  */
    {
      href: 'https://chat.ens.domains',
      position: 'right',
      className: 'header-discord-link',
      'aria-label': 'Discord link',
    },
    {
      href: 'https://twitter.com/ensdomains',
      position: 'right',
      className: 'header-twitter-link',
      'aria-label': 'Twitter link',
    },
    {
      href: 'https://github.com/ensdomains/ens-support-docs',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub  repository',
    },
        ],
      },
      /*
      footer: {
        style: 'light',
        links: [
          {
            title: 'External Docs',
            items: [
              {
                label: 'Developer Docs',
                href: 'https://docs.ens.domains',
              },
              {
                label: 'Governance Docs',
                href: 'https://docs.ens.domains/v/governance',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://chat.ens.domains',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ensdomains',
              },
            ],
          },
          {
            title: 'Governance',
            items: [
              {
                label: 'DAO Forum',
                href: 'https://discuss.ens.domains',
              },
              {
                label: 'Constitution',
                href: 'https://constitution.ens.domains',
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'ENS Labs',
                href: 'https://ens.domains',
              },
              {
                label: 'ENS GitHub',
                href: 'https://github.com/ensdomains',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      */
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
