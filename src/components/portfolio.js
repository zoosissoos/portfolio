import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import PortfolioCard from './portfoliocard.js';
import projects from './projects';

class Portfolio extends Component {

  state =  {
    projectsDisp: []
  }

  componentDidMount(){
    console.log(projects)
    this.setState({projectsDisp:projects});
  }

  render(){
    return (
        <Segment centered="true" padded='very' aligned="true" inverted>
          <h1>My Work</h1>
          <Grid aligned="true" centered="true" padded stackable="true" columns={4}>
            {this.state.projectsDisp.map((project)=>(
              <Grid.Column key={project.id.toString()} centered="true" stretched="true">
                <PortfolioCard prop = {project}/>
              </Grid.Column >
              ))}      
          </Grid>
        </Segment>  
    )
  }
}

export default Portfolio;