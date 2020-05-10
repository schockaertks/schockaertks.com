import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
const H1 = styled.h1`
  margin-bottom: 1.25rem;
`
const P = styled.p`
  font-size: 1.25rem;
  &:first-of-type {
    margin-bottom: 1.5rem;
  }
  &:last-of-type {
    margin-bottom: 1.25rem;
  }
`

const AboutPage = () => (
  <StyledLayout>
    <SEO title="About" />
    <H1>About me</H1>
    <P>
      My professional work at this point has taken me into a number of roles
      from technical support and software testing to web development and
      consulting both employed and freelance. I have a wide array of skills and
      interests that have all contributed to my value as a developer and
      consultant.
    </P>
    <P>
      I consider myself a curious and inquisitive person constantly learning
      something new to improve my skill set. As a visual thinker I often find
      creative ways to solve problems. Since 2004 I've evolved with the web
      industry and now I specialize in JavaScript development with React and
      Node.js.
    </P>
  </StyledLayout>
)

export default AboutPage
