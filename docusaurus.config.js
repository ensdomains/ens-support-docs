// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ENS Support',
  tagline: 'Home of the Support Mod Squad',
  url: 'https://docusaurus.ensmods.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/enssite_logo.svg',
  plugins: ['@docusaurus/plugin-ideal-image'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cthulu-dot-eth', // Usually your GitHub org/user name.
  projectName: 'ens-supportdocs', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
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
      navbar: {
        title: 'ENS Support',
        logo: {
          alt: 'ENS Logo',
          src: 'img/enssite_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Support Docs',
          },
	  {
	    href: 'https://docs.ens.domains',
	    label: 'Developer Docs',
	    position: 'right',
	  },
	  {
	    href: 'https://docs.ens.domains/v/governance',
	    label: 'Governance Docs',
	    position: 'right',
	  },
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
      href: 'https://github.com/cthulu-dot-eth/ens-supportdocs',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub  repository',
    },
          {to: '/blog', label: 'Support Updates', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Support Docs',
                to: '/docs/intro',
              },
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
