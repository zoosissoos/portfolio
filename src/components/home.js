import React from 'react'
import {Header, Segment,Image } from 'semantic-ui-react'

const Home = () => (
    <Segment inverted padded='very'>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>
        Daniel Lewis
      </Header.Content>
      <Image centered style = {{'width':250}} src={require('../images/logo.jpg')} />
      <Header.Content>
        Web Development
      </Header.Content>
    </Header>
    </Segment>
)

export default Home;