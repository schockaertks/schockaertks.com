import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Link from "./link"

const Menu = props => {
  const {
    file: { publicURL },
  } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "Resume-Kristof-Schockaert" }) {
          publicURL
        }
      }
    `
  )

  return (
    <nav {...props}>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/about" activeClassName="active">
        About
      </Link>
      <Link to="/contact" activeClassName="active">
        Contact
      </Link>
      <Link to={publicURL}>Resume</Link>
    </nav>
  )
}

export default Menu
