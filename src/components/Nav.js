import React from 'react';
import './styles/Nav.css'

const Nav = ({ handleClick }) => {
    return (
      <div id="nav-container">
        <nav id="nav">
          <span id="about" className="nav-item" onClick={handleClick} value="about">Me</span>
          <span id="portfolio" className="nav-item" onClick={handleClick} value="projects">Projects</span>
          <span id="contact" className="nav-item" onClick={handleClick} value="contact">Contact</span>
        </nav>
      </div>
    )
}

export default Nav
