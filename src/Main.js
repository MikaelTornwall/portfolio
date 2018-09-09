import React, { Component } from 'react'
import './Main.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      container: "portfolio"
    }
  }

  handleContainer = () => {
    return (event) => {
      this.setState({ container: event.target.id })
    }
  }

  render() {

    const renderContent = () => {
      if (this.state.container === "portfolio") {
        return <Portfolio />
      } else if (this.state.container === "about") {
        return <About />
      } else if (this.state.container === "contact") {
        return <Contact />
      }
    }

    return (
      <div id="frame">
        <Header />
        <div className="main">
        <Nav
          handleClick={this.handleContainer()}
        />
        <div className="container">
          {renderContent()}
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default Main
