module.exports = {
  siteMetadata: {
    title: `Stormhyde`,
    description: `Free software & resources created for animators for use with Autodesk Maya`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stormhyde`,
        short_name: `stormhyde`,
        start_url: `/`,
        background_color: `#039be5`,
        theme_color: `#039be5`,
        display: `minimal-ui`,
        icon: `src/images/symbol-blue.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
