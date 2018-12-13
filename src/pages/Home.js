import React, { Component } from 'react'
import logo from '../logo.svg'
import Counter from '../components/Counter'
import './Home.scss'

class Home extends Component {
  render () {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header>
    )
  }
}

export default Home