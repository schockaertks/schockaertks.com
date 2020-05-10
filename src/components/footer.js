import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Link from "./link"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0 1.25rem;
  font-size: 1rem;
  align-items: baseline;
`
const Copyright = styled.p`
  margin-top: 1.25rem;
`
const Author = styled(Link)`
  display: inline-block;
`
const Links = styled.div`
  display: flex;
  margin-top: 1.25rem;
`
const StyledLink = styled(Link)`
  & + & {
    margin-left: 1.25rem;
  }
`

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            links {
              github
              twitter
              linkedin
              email
            }
          }
        }
      }
    `
  )

  return (
    <StyledFooter>
      <Copyright>
        © {new Date().getFullYear()}{" "}
        <Author to="/">{siteMetadata.author}</Author>
      </Copyright>
      <Links>
        <StyledLink to={`mailto:${siteMetadata.links.email}`}>Email</StyledLink>
        <StyledLink to={siteMetadata.links.github}>Github</StyledLink>
        <StyledLink to={siteMetadata.links.twitter}>Twitter</StyledLink>
        <StyledLink to={siteMetadata.links.linkedin}>LinkedIn</StyledLink>
      </Links>
    </StyledFooter>
  )
}

export default Footer
