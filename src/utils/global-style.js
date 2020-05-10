import { createGlobalStyle } from "styled-components"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import {
  faMoon,
  faSun,
  faBars,
  faTimes,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons"

import "./sanitize.css"
import "./forms.css"
import "./typography.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
library.add(
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faMoon,
  faSun,
  faBars,
  faTimes,
  faEnvelopeSquare
)

const GlobalStyle = createGlobalStyle`
  body.light {
    --background: hsla(0, 0%, 100%, 1);
    --text: hsla(0, 0%, 15%, 1);
    --dots: hsla(0, 0%, 15%, .2);
  }

  body.dark {
    --background: hsla(0, 0%, 15%, 1);
    --text: hsla(0, 0%, 90%, 1);
    --dots: hsla(0, 0%, 90%, .2);
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  a {
    color: var(--text);
    text-decoration: none;
    &:hover, &.active {
      box-shadow: 0 2px 0 0 currentColor;
    }
  }

  p, h1 {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`

export default GlobalStyle
