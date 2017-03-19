import React, { Component } from 'react'
import './App.css'
import Header from './Header'

// import ParticlesBackground from './ParticlesBackground'

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Header />
          <div className="content">
            {this.props.children}
          </div>
      </div>
    )
  }
}

export default App
