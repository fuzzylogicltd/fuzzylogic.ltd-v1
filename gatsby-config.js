module.exports = {
  siteMetadata: {
    title: "fuzzylogic.ltd",
    rootURL: "https://fuzzylogic.ltd",
    copyright: "©2021 Lazar Miseljic. Built with Gatsby.",
    description:
      "Freelance web designer and developer. Creating modern websites for everyone.",
  },
  plugins: [
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
  ],
}
