import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`
const IntroWrapper = styled.div`
  margin-bottom: 1.25rem;
  @media (min-width: 25rem) {
    max-width: 24rem;
  }
`
const H1 = styled.h1`
  margin-bottom: 1.25rem;
`
const P = styled.p`
  font-size: 1.25rem;
`
const Links = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  min-width: 10rem;
`
const StyledLink = styled(Link)`
  width: fit-content;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  &:last-of-type {
    margin-bottom: 0;
  }
  svg {
    margin-right: 0.625rem;
  }
  span {
    display: none;
  }
  span + span {
    display: flex;
  }
  @media (min-width: 52.5rem) {
    span {
      display: flex;
    }
    span + span {
      display: none;
    }
  }
`

const ContactPage = () => {
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
    <StyledLayout>
      <SEO title="Contact" />
      <IntroWrapper>
        <H1>Contact me</H1>
        <P>
          I'm looking for a JavaScript development or consulting position where
          learning is encouraged, criticism is constructive and where I can grow
          my skill set.
        </P>
      </IntroWrapper>
      <Links>
        <StyledLink to={`mailto:${siteMetadata.links.email}`}>
          <FontAwesomeIcon icon={"envelope-square"} />{" "}
          <span>{siteMetadata.links.email}</span>
          <span>Email</span>
        </StyledLink>
        <StyledLink to={siteMetadata.links.github}>
          <FontAwesomeIcon icon={["fab", "github-square"]} />{" "}
          <span>{siteMetadata.links.github}</span>
          <span>Github</span>
        </StyledLink>
        <StyledLink to={siteMetadata.links.twitter}>
          <FontAwesomeIcon icon={["fab", "twitter-square"]} />{" "}
          <span>{siteMetadata.links.twitter}</span>
          <span>Twitter</span>
        </StyledLink>
        <StyledLink to={siteMetadata.links.linkedin}>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
          <span>{siteMetadata.links.linkedin}</span>
          <span>LinkedIn</span>
        </StyledLink>
      </Links>
    </StyledLayout>
  )
}

export default ContactPage
