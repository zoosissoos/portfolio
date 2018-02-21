import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

const AboutMe = () => (
  <div id = {'aboutme'}>
    <Segment padded='very'>
      <Container>
        <h1>About Me</h1>
        <p>At a young age, I worked with my dad at my family owned service station.  I became fascinated by the ability to assemble individual parts to make a whole.  At home, I discovered an old IBM PS/2 computer in our basement. I began to disassemble it to understand how a modern-day computer operates and compared it to the inner workings of our family computer at that time. Understanding how independent pieces can be connected to create a final project has always been a passion of mine.</p>
        <p>In college, as an Anthropology/Sociology major, I took this passion to the humanities level, realizing that a person’s background and experiences helps them to become the person they are today. The people you work with and encounter are unique individuals who view situations through their own lens dependent upon their cultures and life events.  It is key to embrace these differences when working together to benefit society.</p>
        <p>In today’s world, it is important to be able to combine both the humanities and technology to create products that help individuals navigate through a complex world. I look forward to working with businesses that share this philosophy.</p>
      </Container>
    </Segment>
  </div>
)

export default AboutMe;