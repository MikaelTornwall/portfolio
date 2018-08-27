import React from 'react';

const Nav = ({ handleClick }) => {
    return (
      <nav id="nav">
        <span id="portfolio" onClick={handleClick} value="projects">Projects</span>&nbsp;
        <span id="about" onClick={handleClick} value="about">About me</span>&nbsp;
        <span id="contact" onClick={handleClick} value="contact">Contact</span>&nbsp;
      </nav>
    )
}

export default Nav
