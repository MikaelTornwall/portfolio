import React from 'react'
import './styles/Header.css'

const Header = () => (
  <div id="header-container">
    <div className="background-container">
      <header>
        <div id="header">
          <div className="header-some">
            <h1 id="header-title">tornwall.io</h1>
            <a href="#" target="_blank"><i className="icon fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank"><i className="icon fab fa-github"></i></a>
            <a href="#" target="_blank"><i className="icon fab fa-codepen"></i></a>
            <a href="#" target="_blank"><i className="icon fab fa-twitter"></i></a>
          </div>
        <span className="arrow-container">
          <a href="#nav-container"><i class="arrow fas fa-angle-down"></i></a>
        </span>
        </div>
      </header>
    </div>
  </div>
)

export default Header
