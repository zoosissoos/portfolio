import React from 'react'
import {Header, Segment,Image } from 'semantic-ui-react'

const Home = () => (
  <div id = {'home'}>
    <Segment inverted padded='very'style={{ minHeight: 400 }}>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>
        Daniel Lewis
      </Header.Content>
      <Image centered style = {{'width':250}} src={require('../images/portfolio.jpg')} />
      <Header.Content>
        Web Development
      </Header.Content>
    </Header>
    </Segment>
  </div>
)

export default Home;