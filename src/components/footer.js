import React from "react"

import logo from "../images/logo.png"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="site-footer">
      <img src={logo} alt={siteTitle} className="site-footer__logo" />
      <p>
        This work uses material from the Quest Creators Resource. The Quest
        Creators Resource by The Adventure Guild, LLC is licensed under{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        For more information about Quest, please visit{" "}
        <a href="https://www.adventure.game/">www.adventure.game</a>.
        Additionally, please{" "}
        <a href="https://www.adventure.game/community-code">
          read Quest’s Community Guidelines
        </a>{" "}
        to help create experiences that are positive and fun.
      </p>
      <p>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <a href="https://twitter.com/amazingrando">@amazingrando</a>
      </p>
    </footer>
  )
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
