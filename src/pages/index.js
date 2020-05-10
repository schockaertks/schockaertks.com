import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

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
`
const H1 = styled.h1`
  font-size: 2rem;
  @media (min-width: 25rem) {
    max-width: 24rem;
  }
`
const Span = styled.span`
  display: flex;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1.25rem 0 1.5rem;
`
const Links = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  font-size: 1.5rem;
  & + & {
    margin-left: 1.25rem;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  margin: 2rem 2rem 1.25rem 0;
`
const Background = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  width: 250px;
  height: 250px;
  background-image: radial-gradient(var(--dots) 20%, transparent 0);
  background-size: 10px 10px;
`
const StyledImg = styled(Img)`
  border-radius: 1.25rem;
`

const IndexPage = () => {
  const {
    site: { siteMetadata },
    file,
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
        file(name: { eq: "Kristof-Schockaert" }) {
          childImageSharp {
            fixed(width: 250, height: 250, quality: 85) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <StyledLayout>
      <SEO />
      <IntroWrapper>
        <H1>
          Hey! <br />
          I'm Kristof Schockaert, <br />
          <Span>
            an experienced JavaScript developer and consultant passionate about
            providing solutions to business problems.
          </Span>
        </H1>
        <Links>
          <StyledLink
            to={`mailto:${siteMetadata.links.email}`}
            aria-label={`Email`}
          >
            <FontAwesomeIcon icon={"envelope-square"} />
          </StyledLink>
          <StyledLink to={siteMetadata.links.github} aria-label={`Github`}>
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </StyledLink>
          <StyledLink to={siteMetadata.links.twitter} aria-label={`Twitter`}>
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </StyledLink>
          <StyledLink to={siteMetadata.links.linkedin} aria-label={`LinkedIn`}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </StyledLink>
        </Links>
      </IntroWrapper>
      <ImageWrapper>
        <Background />
        <StyledImg
          fixed={file.childImageSharp.fixed}
          alt="Kristof Schockaert"
        />
      </ImageWrapper>
    </StyledLayout>
  )
}

export default IndexPage
