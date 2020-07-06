import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo-white.svg"

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="branding">
            <Link to="/">
              <img src={logo} width="186" alt="Stormhyde" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
