import React from 'react'
import Box from 'react-layout-components'
import {MorphIcon} from 'react-svg-buttons'

const Nav = () => (
  // This acts as some kind of container
  <Box flex justifyContent="center" alignItems="center">
    <Box row justifyContent="center" alignItems="center"> 
      <Box column order = {1} width = {100}>
        <MorphIcon type="thunderbolt" />
        <p>About</p>
      </Box>
      <Box column order = {2} width = {100}>
        <MorphIcon type="code" />
        <p>Portfolio</p>
      </Box>  
      <Box column order = {3} width = {100}>
        <MorphIcon type="inbox" />
        <p>Connect</p>
      </Box>
    </Box>
  </Box>
)
export default Nav;