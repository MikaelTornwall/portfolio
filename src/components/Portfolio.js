import React from 'react'
import './styles/Portfolio.css'

const Portfolio = () => (
  <div id="portfolio-container">
    <h2 id="portfolio-header">Portfolio</h2>
    <div>
      <div className="card-container">
        <div className="sub-container">
        <div className="card">
          <div className="card-header">
            <h3>Bloggist</h3>
          </div>
          <span className="card-logo"><i class="logo-mod fab fa-node"></i> <i class="logo-mod fab fa-react"></i></span>
          <span className="card-content">A full-stack web application that let's you add your favorite blogs, view other peoples' favorite blogs and leave comments.</span>
          <span className="card-link-logo"><i class="link-logo fab fa-github"></i></span>
          <span className="card-link"><a href="#">View source code</a></span>
        </div>
        <div className="card">
        </div>
        </div>

        <div className="sub-container">
        <div className="card">
        </div>
        <div className="card">
        </div>
      </div>
      </div>

      <div className="card-container">
        <div className="sub-container">
        <div className="card">

        </div>
        <div className="card">

        </div>
      </div>
      <div className="sub-container">
        <div className="card">
        </div>
        <div className="card">
        </div>
      </div>
      </div>
    </div>
  </div>
)

export default Portfolio
