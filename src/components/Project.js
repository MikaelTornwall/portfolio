import React from 'react'
import './styles/Portfolio.css'

const Project = ({ onMouseOver }) => (
  <div>
      <div id="card1" className="card__withImage" onMouseOver={onMouseOver}>
        <img className="card__image" src={require('./resources/images/bloggist.png')} alt="Bloggist app landing page" />
    </div>
  </div>
)

export default Project
