import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PortfolioCard = (props) => (
  <Card className = "portCard">
    {/* <Image src={props.prop.title} /> */}
    <Card.Content>
      <Card.Header textAlign='center'>{props.prop.title}</Card.Header>
      <Card.Meta textAlign='center'>Created with:</Card.Meta>
      <Card.Meta textAlign='center'>{props.prop.techs}</Card.Meta>
      <Card.Description>{props.prop.desc}</Card.Description>
    </Card.Content>
    <Card.Content textAlign='center' extra>
      <a href={props.prop.deployed}>
        <Icon name='user' />
        Deployed Project
      </a>
    </Card.Content>
    <Card.Content textAlign='center' extra>
      <a href={props.prop.git}>
        <Icon name='code' />
        GitHub
      </a>
    </Card.Content>  
  </Card>
)
export default PortfolioCard;
