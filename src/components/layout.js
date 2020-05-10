import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../utils/global-style"
import Header from "./header"
import Footer from "./footer"

const Container = styled.div`
  max-width: 60rem;
  display: grid;
  margin: 0 auto;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  padding: 0 1.25rem;
`

const Layout = ({ children, ...other }) => (
  <Container>
    <GlobalStyle />
    <Header />
    <main {...other}>{children}</main>
    <Footer />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
