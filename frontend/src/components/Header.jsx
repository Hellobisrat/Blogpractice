import React from 'react'
import {Link}from 'react-router-dom'
import { useState } from 'react'
import {AppBar, Button, Toolbar,Box, Typography,  Tabs,Tab} from '@mui/material'
import { useSelector } from 'react-redux'
const Header = () => {
 const [value,setValue] = useState('')
 const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  return (
      <AppBar 
       position='sticky'
       sx={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,118,121,1) 35%, rgba(0,120,255,1) 100%)"
       }}
       >
        <Toolbar>
        <Typography variant='h4'>BlogsApp</Typography>

       {isLoggedIn && <Box display="flex" marginLeft={'auto'}
         marginRight={'auto'}>
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
        </Box> }
        <Box display="flex" marginLeft="auto">
        {!isLoggedIn && <> <Button
          LinkComponent={Link}
          to="/auth" 
          variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Login</Button> 
            <Button
          LinkComponent={Link}
          to="/auth" 
           variant='contained' sx={{margin:1,borderRadius:10}}color='warning'>SignUp</Button></>}
        {isLoggedIn && <Button 
          LinkComponent={Link}
          to="/auth"
          variant='contained' sx={{margin:1,borderRadius:10}}color='warning'>LogOut</Button> }
        </Box>
        
        </Toolbar>
      </AppBar>
  
)}

export default Header