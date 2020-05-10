import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Toggle from "./toggle"
import Link from "./link"
import Menu from "./menu"

const StyledHeader = styled.header`
  display: flex;
  padding: 1.25rem 0 2.5rem;
  font-size: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
const LogoLink = styled(Link)`
  font-weight: 700;
  font-size: 1.25rem;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const DesktopMenu = styled(Menu)`
  display: none;
  @media (min-width: 40rem) {
    display: flex;
  }
  a + a {
    margin-left: 1.25rem;
  }
`
const StyledToggle = styled(Toggle)`
  margin-left: 1.25rem;
  font-size: 1.25rem;
  z-index: 10;
`
const Button = styled.button`
  margin-left: 1.25rem;
  font-size: 1.25rem;
  z-index: 10;
  @media (min-width: 40rem) {
    display: none;
  }
`
const MobileMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  width: 100vw;
  height: 100vh;
  padding: 5rem 0;
  z-index: 5;
  top: 0;
  left: 0;
  background: var(--background);
  font-size: 1.25rem;
  @media (min-width: 40rem) {
    display: none;
  }
`

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const toggleMobileNav = () => setMobileNav(!mobileNav)

  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  return (
    <StyledHeader>
      <LogoLink to="/">{siteMetadata.author}</LogoLink>
      <Wrapper>
        <DesktopMenu aria-label="Desktop Menu" />
        <StyledToggle />
        <Button
          onClick={toggleMobileNav}
          aria-label={`${mobileNav ? "Close menu" : "Open menu"}`}
        >
          {mobileNav ? (
            <FontAwesomeIcon icon={"times"} size="lg" />
          ) : (
            <FontAwesomeIcon icon={"bars"} />
          )}
        </Button>
      </Wrapper>
      {mobileNav && <MobileMenu aria-label="Mobile Menu" />}
    </StyledHeader>
  )
}

export default Header
