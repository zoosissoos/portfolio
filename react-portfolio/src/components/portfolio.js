import React from 'react'
import { Grid,Segment } from 'semantic-ui-react';
import PortfolioCard from './portfoliocard.js'

const Portfolio = () => (
<div id={'portfolio'}>  
  <Segment center padded='very' aligned inverted>
    <h1>Portfolio</h1>
    <Grid container centered padded columns={3}>
      <Grid.Column verticalAlign='middle'>
        <PortfolioCard/>
      </Grid.Column >
      <Grid.Column verticalAlign='middle'>
        <PortfolioCard/>
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
        <PortfolioCard/>
      </Grid.Column>
      {/* <Grid.Column verticalAlign='middle'>
        <PortfolioCard/>
      </Grid.Column >
      <Grid.Column verticalAlign='middle'>
        <PortfolioCard/>
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
        <PortfolioCard/>
      </Grid.Column> */}
    </Grid>
  </Segment>  
</div>
)

export default Portfolio;