import React from 'react'
import Box from 'react-layout-components'

const About = () => (
  <Box flex justifyContent="center" alignItems="center">
    <Box column justifyContent="center" alignItems="center">
      <Box row>
        <h3>About Me</h3>
      </Box>
      <Box row maxWidth = {700}>
        <p>At a young age, I worked with my dad at my family owned service station.  I became fascinated by the ability to assemble individual parts to make a whole.  At home, I discovered an old IBM PS/2 computer in our basement. I began to disassemble it to understand how a modern-day computer operates and compared it to the inner workings of our family computer at that time. Understanding how independent pieces can be connected to create a final project has always been a passion of mine. </p>
      </Box>
      <Box row maxWidth = {700}>  
        <p>In college, as an Anthropology/Sociology major, I took this passion to the humanities level, realizing that a person’s background and experiences helps them to become the person they are today. The people you work with and encounter are unique individuals who view situations through their own lens dependent upon their cultures and life events.  It is key to embrace these differences when working together to benefit society.</p>
      </Box>
      <Box row maxWidth = {700}>  
        <p>In today’s world, it is important to be able to combine both the humanities and technology to create products that help individuals navigate through a complex world. I look forward to working with businesses that share this philosophy.</p>
      </Box>
    </Box>   
  </Box>
)

export default About;