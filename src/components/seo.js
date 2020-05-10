import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title }) {
  const {
    site: { siteMetadata },
    file: { publicURL },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitter
          }
        }
        file(name: { eq: "schockaertks-social" }) {
          publicURL
        }
      }
    `
  )
  const image = `${siteMetadata.siteUrl}${publicURL}`

  return (
    <Helmet
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s - ${siteMetadata.title}`}
    >
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="image" content={image} />

      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}

export default SEO
