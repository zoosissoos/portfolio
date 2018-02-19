import React from 'react'
import Box from 'react-layout-components'
import {MorphIcon} from 'react-svg-buttons'

const Example = () => (
  // This acts as some kind of container
  <Box flex justifyContent="center" alignItems="center">
    <Box flex-direction = "row" justifyContent="center" alignItems="center">
    <h1>Daniel Lewis</h1>
    <h3>Web Development</h3>
    </Box>
    <Box flex-direction = "row" justifyContent="center" alignItems="center">
        <Box order = {1}>
          <MorphIcon type="thunderbolt" />
          <p>About</p>
        </Box>
        <Box order = {2}>
          <MorphIcon type="code" />
          <p>Portfolio</p>
        </Box>  
        <Box  order = {3}>
          <MorphIcon type="inbox" />
          <p>Connect</p>
        </Box>
    </Box>
  </Box>
)

export default Example;