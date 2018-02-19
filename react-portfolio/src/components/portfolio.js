import React from 'react'
import Box from 'react-layout-components'

const Portfolio = () => (
  <Box flex justifyContent="center" alignItems="center">
    <Box column justifyContent="center" alignItems="center">
      <Box row>
        <h3>Portfolio</h3>
      </Box>
      <Box row>
        <p>Below are selected projects that display the application of various technologies</p>
      </Box>
      <Box flex row maxWidth = {600} justifyContent = "space-around">
        <Box column maxWidth = {200}>
          <p>test1</p>
        </Box>
        <Box column maxWidth = {200}>
          <p>test2</p>
        </Box>
        <Box column maxWidth = {200}>
          <p>test3</p>
        </Box>
      </Box>
      <Box row maxWidth = {700}>
        <Box column>
          <p>test4</p>
        </Box>
        <Box column>
          <p>test5</p>
        </Box>
        <Box column>
          <p>test6</p>
        </Box>
      </Box>
    </Box>   
  </Box>
)

export default Portfolio;