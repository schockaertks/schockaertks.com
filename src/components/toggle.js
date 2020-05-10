import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Toggle = props => {
  const [theme, setTheme] = useState(null)
  const lightTheme = theme === null || theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <>
      <Helmet>
        <meta
          name="theme-color"
          content={lightTheme ? "hsla(0, 0%, 100%, 1)" : "hsla(0, 0%, 15%, 1)"}
        />
      </Helmet>
      <button
        aria-label={`Switch to ${lightTheme ? "dark" : "light"} mode`}
        onClick={() =>
          window.__setPreferredTheme(lightTheme ? "dark" : "light")
        }
        {...props}
      >
        {lightTheme ? (
          <FontAwesomeIcon icon={"moon"} />
        ) : (
          <FontAwesomeIcon icon={"sun"} />
        )}
      </button>
    </>
  )
}

export default Toggle
