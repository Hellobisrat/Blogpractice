import React from 'react'
import Link from 'react-router-dom'
import { useState } from 'react'
import {AppBar, Button, Toolbar,Box, Typography, Tabs,Tab} from '@mui/material'

const Header = () => {
 const [value,setValue] = useState('')
  return (
      <AppBar 
       position='sticky'
       sx={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,118,121,1) 35%, rgba(0,120,255,1) 100%)"
       }}
       >
        <Toolbar>
        <Typography variant='h4'>BlogsApp</Typography>
        <Box display="flex">
          <Tabs 
          textColor='inherit'
          value={value}
          onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={Link}
            to="/blogs"
            label="All Blogs"/>
            <Tab LinkComponent={Link}
            to='/myBlogs'
            label="My Blogs"/>

          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Login</Button>
          <Button variant='contained' sx={{margin:1,borderRadius:10}}color='warning'>SignUp</Button>
        </Box>
        
        </Toolbar>
      </AppBar>
  
)}

export default Header