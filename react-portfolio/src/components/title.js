import React from 'react'
import Box from 'react-layout-components'

const Title= () => (
  // This acts as some kind of container
  <Box flex justifyContent="center" alignItems="center">
    <Box column justifyContent="center" alignItems="center">
      <Box row>
        <h1>Daniel Lewis</h1>
      </Box>
      <Box row>
        <h3>Web Development</h3>
      </Box>  
    </Box>
  </Box>
)

export default Title;