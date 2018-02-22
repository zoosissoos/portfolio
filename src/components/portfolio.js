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
      <div>  
        <Segment center="true" padded='very' aligned="true" inverted>
          <h1>My Work</h1>
          <Grid container center="true" padded columns={3}>
            {this.state.projectsDisp.map((project)=>(
              <Grid.Column key={project.id.toString()} verticalAlign='middle'>
                <PortfolioCard prop = {project}/>
              </Grid.Column >
              ))}   
          </Grid>
        </Segment>  
      </div>
    )
  }
}

export default Portfolio;