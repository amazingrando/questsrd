import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const [isOpen, setIsOpen] = useState(false)

const toggle = () => setIsOpen(!isOpen)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#232222`,
      color: "#fff",
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">Rules</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Character Creation</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Roles, Abilities, &amp; Treasure</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">NPCs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Additional Resources</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
