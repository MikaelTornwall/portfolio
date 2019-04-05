import React from 'react'
import './styles/About.css'



class About extends React.Component {

  render() {

    const age = () => {

      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      let age = year - 1992

      month < 9 || (month === 9 && day < 18) ? age -= 1 : age

      return age
    }

    return (
      <div className="about-container">
        <h2 className="about-header">About me</h2>
        <div className="about-info">
          <div>
            <p className="intro-text">Welcome!<br /> <br /> Here is a brief summary about me: </p>
            <p><strong>Name:</strong> Mikael Törnwall</p>
            <p><strong>Age:</strong> {age()}</p>
            <p><strong>From:</strong> Helsinki, Finland</p>
            <p><strong>Education:</strong> I'm currently doing a MSc. degree in Economics at Aalto University and bachelor level Computer Science courses at University of Helsinki</p>
            <p><strong>Languages:</strong> Java, JavaScript, HTML5, CSS3, R, SQL</p>
            <p><strong>Technologies:</strong> MongoDB, Express, React, NodeJS, JQuery, React Native, Spring</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
