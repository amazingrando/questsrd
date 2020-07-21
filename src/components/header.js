import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/pro-solid-svg-icons"

import logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___order }) {
          edges {
            node {
              frontmatter {
                title
                slug
                order
              }
            }
          }
        }
      }
    `
  )

  return (
    <header className="site-header">
      <div className="site-header__content">
        <img src={logo} alt={siteTitle} className="site-header__logo" />
        <nav className="nav">
          <FontAwesomeIcon
            icon={faBars}
            className={`menu-toggle menu-toggle--open ${
              isOpen ? "hide" : "show"
            }`}
            onClick={toggle}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={`menu-toggle menu-toggle--close ${
              isOpen ? "show" : "hide"
            }`}
            onClick={toggle}
          />
          <ul className={isOpen ? "show" : "hide"}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li id={node.frontmatter.title}>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
