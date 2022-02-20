module.exports = {
  siteMetadata: {
    title: "fuzzylogic.ltd",
    rootURL: "https://fuzzylogic.ltd",
    copyright: "©2022 Lazar Miseljic. Built with Gatsby.",
    description:
      "Freelance web designer and developer. Creating modern websites for everyone.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fuzzylogic.ltd web design and development`,
        short_name: `fuzzylogic.ltd`,
        start_url: `/`,
        background_color: `#023047`,
        theme_color: `#ff934f`,
        display: `standalone`,
        icon: `static/icons/icon.svg`, 
        icons: [ 
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://stats.fuzzylogic.ltd',
        siteUrl: 'https://fuzzylogic.ltd',
        cookieDomain: '*.fuzzylogic.ltd'
      }
    }
  ],
}
