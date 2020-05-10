module.exports = {
  siteMetadata: {
    title: `Kristof Schockaert - Freelance JavaScript Developer and Consultant`,
    description: `Hey! I’m Kristof Schockaert, an experienced JavaScript developer and consultant passionate about providing solutions to business problems.`,
    author: `Kristof Schockaert`,
    twitter: `@schockaertks`,
    siteUrl: `https://schockaertks.com`,
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
    `gatsby-plugin-robots-txt`,
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
          file(name: { eq: "Resume-Kristof-Schockaert" }) {
            publicURL
          }
        }`,
        serialize: ({ site, allSitePage, file }) => {
          const pages = []
          allSitePage.edges.map(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          pages.push({
            url: `${site.siteMetadata.siteUrl}${file.publicURL}`,
            changefreq: `daily`,
            priority: 0.7,
          })
          return pages
        },
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
