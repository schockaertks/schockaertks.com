module.exports = {
  siteMetadata: {
    title: `Kristof Schockaert - JavaScript Developer and Consultant`,
    description: `Hey! I’m Kristof Schockaert, an experienced JavaScript developer and consultant passionate about providing solutions to business problems.`,
    author: `Kristof Schockaert`,
    twitter: `@schockaertks`,
    url: `https://schockaertks.com`,
    links: {
      github: `https://github.com/schockaertks`,
      twitter: `https://twitter.com/schockaertks`,
      linkedin: `https://www.linkedin.com/in/schockaertks`,
      email: `schockaertks@gmail.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kristof Schockaert`,
        short_name: `Schockaertks`,
        description: `Hey! I’m Kristof Schockaert, an experienced JavaScript developer and consultant passionate about providing solutions to business problems.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/schockaertks-icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
