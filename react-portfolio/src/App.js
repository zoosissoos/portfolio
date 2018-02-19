import React, { Component } from 'react';
import './App.css';
import Title from './components/title'
import Nav from './components/nav'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Nav />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
