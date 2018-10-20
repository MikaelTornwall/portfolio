import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './styles/Header.css'

const Header = () => (
  <div id="header-container">
    <div className="background-container">
      <header>
        <div id="header">
          <div className="header-some">
            <h1 id="header-title">tornwall.io</h1>
            <a href="https://www.linkedin.com/in/mikaeltornwall/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-linkedin-in"></i></a>
            <a href="https://github.com/MikaelTornwall" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-github"></i></a>
            <a href="https://codepen.io/MikaelTornwall/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-codepen"></i></a>
            <a href="https://twitter.com/TornwallMikael" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-twitter"></i></a>
          </div>
        <AnchorLink href="#nav-container" className="arrow-container">
          <i className="arrow fas fa-angle-down"></i>
        </AnchorLink>
        </div>
      </header>
    </div>
  </div>
)

export default Header
