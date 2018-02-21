import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Nav from './components/nav'
import Home from './components/home'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default App;
