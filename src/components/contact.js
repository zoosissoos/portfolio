import React from 'react'
import { Segment, List } from 'semantic-ui-react'

const Contact = () => (
  <Segment centered = "true" padded='very'>  
    <h1>Lets talk.</h1>
    <p>I'm currently availible. You can reach me best by email.</p>
    <List>
      <List.Item icon='user circle' content='Daniel Lewis' />
      <List.Item icon='marker' content='Monmouth County, NJ' />
      <List.Item icon='mail' content={<a href='mailto:danielbrianlewis@gmail.com'>danielbrianlewis@gmail.com</a>} />
      <List.Item icon='code' content={<a href='https://github.com/zoosissoos'>GitHub</a>} />
      <List.Item icon='users' content={<a href='www.linkedin.com/in/danielbrianlewis'>LinkedIn</a>} />
    </List>
  </Segment>  
)
export default Contact;