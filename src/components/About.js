import React from 'react'
import './styles/About.css'

const About = () => (
  <div className="about-container">
    <h2 className="about-header">About me</h2>
    <div className="about-info">
      <div>
        <p className="intro-text">Welcome!<br /> <br /> Here is a brief summary about me: </p>
        <p><strong>Name:</strong> Mikael Törnwall</p>
        <p><strong>Age:</strong> 25</p>
        <p><strong>From:</strong> Helsinki, Finland</p>
        <p><strong>Education:</strong> BSc in Economics from Aalto University. Currently enrolled in MSc at Business and studying first year Computer Science courses at University of Helsinki</p>
        <p><strong>Programming languages:</strong> JavaScript, Java, HTML, CSS</p>
        <p><strong>Other skills:</strong> MongoDB, Express, React, NodeJS</p>
      </div>
    </div>
  </div>
)

export default About
