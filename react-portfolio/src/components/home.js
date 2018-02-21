import React from 'react'
import { Container, Header, Segment,Image } from 'semantic-ui-react'

const Home = () => (
  <div id = {'home'}>
    <Segment inverted padded='very'style={{ minHeight: 400 }}>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>
        Daniel Lewis
      </Header.Content>
      <Image centered size='large' src={require('../images/profile.png')} />
      <Header.Content>
        Web Development
      </Header.Content>
    </Header>
    </Segment>
  </div>
)

export default Home;