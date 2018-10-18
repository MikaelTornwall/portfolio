import React from 'react'
import './styles/About.css'

const About = () => (
  <div className="about-container">
    <h2 className="about-header">About me</h2>
    <hr />
    <div className="about-info">
      <div>
        <p className="intro-text">Welcome!<br /> <br /> Here is a brief summary about me: </p>
        <p><strong>Name:</strong> Mikael Törnwall</p>
        <p><strong>Age:</strong> 26</p>
        <p><strong>From:</strong> Helsinki, Finland</p>
        <p><strong>Education:</strong> BSc. in Economics from Aalto University. Currently studying MSc. degree in Information Systems Science at Aalto University and bachelor level Computer Science courses at University of Helsinki</p>
        <p><strong>Languages:</strong> JavaScript, Java, HTML5, CSS3, R</p>
        <p><strong>Technologies:</strong> MongoDB, Express, React, NodeJS, JQuery, React Native</p>
      </div>
    </div>
  </div>
)

export default About
