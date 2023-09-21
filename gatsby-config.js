/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `your-best-party`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.GATSBY_DATO_CMS_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg", // link do favicon
        name: `Your Best Party`, // nazwa strony
        short_name: `yourbestparty`, // skrócona nazwa strony
        start_url: `/`, // czyli ścieżka którą powinien zobaczyć użytkownik po pierwszym włączeniu strony
        background_color: `#EDAA52`, // kolor tła zastępczego, który bedzie wyświetlany na stronie aplikacji przed załadowaniem jej arkusza stylów
        theme_color: `#34DA31`, // domyślny kolor motywu aplikacji
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://yourbestparty.com/", // link do strony jeżeli taki kiedyś by istniał
        sitemap: "https://yourbestparty.com/sitemap.xml", // link do sitemapy - stworzymy ją za chwilę
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    // process.env.NODE_ENV === 'production'
    //   ? { userAgent: '*', allow: '/' }
    //   : { userAgent: '*', disallow: '/' },

    // powiedziec żę to tylko przykładowa i wrócimy do tego w jednej z poprzednich lekcji.
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node;
            acc[uri] = node;

            return acc;
          }, {});

          return allPages.map((page) => {
            return { ...page, ...wpNodeMap[page.path] };
          });
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
  ],
};
