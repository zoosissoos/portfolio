import React, { Component } from 'react'
import About from './about'
import Portfolio from './portfolio'
import Contact from './contact'
import Home from './home'
import Parallax from 'react-springy-parallax'

class Nav extends Component {

  render() {
    const styles = {
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
    return (  
      <div>  
        <Parallax ref="parallax" pages={4}>
          <Parallax.Layer offset={0} speed={1} />
          <Parallax.Layer offset={1} speed={1} />
          <Parallax.Layer offset={2} speed={1} />
          <Parallax.Layer offset={3} speed={1} />
          <Parallax.Layer
              offset={0}
              speed={0.5}
              style = {styles}
              onClick={() => this.refs.parallax.scrollTo(1)}>
              <Home />
          </Parallax.Layer>
          <Parallax.Layer
              offset={1}
              speed={0.5}
              style = {styles}
              onClick={() => this.refs.parallax.scrollTo(2)}>
              <About />
          </Parallax.Layer>
          <Parallax.Layer
              offset={2}
              speed={0.5}
              style = {styles}
              onClick={() => this.refs.parallax.scrollTo(3)}>
              <Portfolio />
          </Parallax.Layer>
          <Parallax.Layer
              offset={3}
              speed={0.5}
              style = {styles}>
              <Contact />
          </Parallax.Layer>
        </Parallax>
      </div>
    )
  }
}


export default Nav;

