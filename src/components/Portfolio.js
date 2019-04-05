import React from 'react'
import './styles/Portfolio.css'
import Project from './Project'
import content from './resources/content'


class Portfolio extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.setState({ data: content })
  }

renderInfo = () => () => {
  console.log('Hello')

}

render() {

  this.state.data.map(data => console.log(data))

  return (
    <div id="portfolio-container">
      <h2 id="portfolio-header">Portfolio</h2>
      <div>
        <div className="card-container">
            <Project
              onMouseOver={this.renderInfo()}
            />
        </div>
      </div>
    </div>
    )
  }
}

export default Portfolio

{ /*
  <div className="card-header">
    <h3>Bloggist</h3>
  </div>
  <span className="card-logo"><i class="logo-mod fab fa-node"></i> <i class="logo-mod fab fa-react"></i></span>
  <span className="card-content">Full-stack JavaScript application that let's you add your favorite blogs, view other peoples' favorite blogs and leave comments.</span>
  <span className="card-link">
    <button className="card-button"><a className="button-link" href="#"><i class="link-logo fab fa-github"></i> Github</a></button>
    &nbsp;
    <button className="card-button"><a className="button-link" href="#"><i class="link-logo fas fa-link"></i> Visit</a></button>
  </span>
  */ }
