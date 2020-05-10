import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({
  to,
  children,
  activeClassName,
  activeStyle,
  partiallyActive,
  state,
  ...other
}) => {
  // starts with only one '/' and does not end in '.pdf'
  const internal = /^\/(?!\/)(?!.*?\.pdf$)/.test(to)
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        activeStyle={activeStyle}
        partiallyActive={partiallyActive}
        state={state}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  } else {
    return (
      <a href={to} {...other} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  partiallyActive: PropTypes.bool,
  state: PropTypes.object,
}

export default Link
