module.exports = {
  siteMetadata: {
    title: "fuzzylogic.ltd",
    rootURL: "https://fuzzylogic.ltd",
    copyright: "©2021 Lazar Miseljic. Built with Gatsby.",
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
        icon: `/images/favicon-32x32.png`, // This path is relative to the root of the site.
        icons: [ // manually, so they go to static folder:
          {
            src: `/static/icons/mstile-70x70.png`,
            sizes: `70x70`,
            type: `image/png`,
          },
          {
            src: `/static/icons/mstile-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/static/icons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/static/icons/mstile-310x310.png`,
            sizes: `310x310`,
            type: `image/png`,
          }
        ]
      }
    },
    //`gatsby-transformer-remark`,
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
    `gatsby-plugin-offline`
  ],
}
