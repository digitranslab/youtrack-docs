import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Youtrack",
  tagline: "An easy, flexible project management software",
  favicon: "https://media.docs.getyoutrack.io/logo.svg",
  trailingSlash: false,
  // Set the production url of your site here
  url: "https://docs.getyoutrack.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "digitranslab", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          include: ["**/*.md", "**/*.mdx"],
          //sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          // 'https://github.com/digitranslab/youtrack-docs/edit/preview/',
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleAnalytics: {
          trackingID: "G-G578SD4VZD",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    // Replace with your project's social card
    image: "https://media.docs.getyoutrack.io/logo.svg",
    algolia: {
      appId: "AXICJJC8RP",
      apiKey: "23df4157dee1d9a8d435cadd6cae3f26",
      indexName: "youtrack-docs-v3",
    },
    navbar: {
      title: "Youtrack",
      // logo: {
      //   alt: "Youtrack",
      //   src: "https://media.docs.getyoutrack.io/logo.svg",
      // },
      items: [
        {
          type: "search",
          position: "left",
        },
        {
          href: "https://discord.com/invite/A92xrEGCge",
          "aria-label": "Discord",
          position: "right",
          className: "navbar--discord-link",
        },
        // {
        //   href: "https://github.com/digitranslab/youtrack",
        //   "aria-label": "GitHub",
        //   position: "right",
        //   className: "navbar--github-link",
        // },
        // {
        //   href: "https://app.getyoutrack.io/sign-in",
        //   label: "Sign in",
        //   position: "right",
        // },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
