import React from 'react'
import './styles/Portfolio.css'


class Portfolio extends React.Component {
  state = {

  }

renderInfo = () => () => {
  console.log('Hello')
}

render() {
  return (
    <div id="portfolio-container">
      <h2 id="portfolio-header">Portfolio</h2>
      <hr />
      <div>
        <div className="card-container">
          <div className="sub-container">
            <div id="card1" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/bloggist.png')} alt="Bloggist app landing page" />
            </div>
            <div id="card2" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/phonebook.png')} alt="Phonebook app landing page" />
            </div>
          </div>

          <div className="sub-container">
            <div id="card3" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/cryptoapp.png')} alt="CryptoApp app landing page" />
            </div>
            <div id="card4" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/morse.png')} alt="Morse app landing page" />
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="sub-container">
            <div id="card5" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/simon.png')} alt="Simon game app landing page" />
            </div>
            <div id="card6" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/stamping.png')} alt="Stamping app landing page" />
            </div>
          </div>
          <div className="sub-container">
            <div id="car7" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/paint.png')} alt="Paint app landing page" />
            </div>
            <div id="card8" className="card__withImage" onMouseOver={this.renderInfo()}>
              <img className="card__image" src={require('./images/tictactoe.png')} alt="TicTacToe app landing page" />
            </div>
          </div>
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
