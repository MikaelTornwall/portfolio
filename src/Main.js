import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

class Main extends Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="main">
      <Nav />
      <About />
      </div>
    );
  }
}

export default Main
