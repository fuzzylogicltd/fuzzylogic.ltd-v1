module.exports = {
  siteMetadata: {
    title: "fuzzylogic.ltd",
    copyright: "©2021 Lazar Miseljic. Built with Gatsby."

  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ]
}