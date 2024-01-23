import React, { useState } from 'react'
import {Box,Button, TextField, Typography} from '@mui/material'
import axios from 'axios';
const Auth =()=> {
  const [inputs, setInputs] = useState ({
    name:"",
    email:"",
    password:""

  })
  
  const [isSignup,setIsSignup] =useState(false)
  const sendRequest = async (type='login')=>{
     const res = await axios.post(`${type}`,{
      name:inputs.name, 
      email:inputs.email,
      password:inputs.password
    }).catch(err=>console.log(err))
  
  const data = await res.data;
  return data;

  }
  
  
  const handlechange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
   if(isSignup){
   sendRequest('signup').then(data=>{ console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data))})
   }
   sendRequest().then(data=> { console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data)
   )})
  }
 
  
  
  return (
    
    <div>
    <form onSubmit={handleSubmit}>
      <Box 
      maxWidth={400}
       display={'flex'} 
       flexDirection={'column'} 
       alignItems={'center'} 
       justifyContent={'center'}
       boxShadow={'10px 10px 20px #ccc'}
       padding={3}
       margin='auto'
       marginTop={5}
       borderRadius={5}>
      <Typography variant='h2' padding={3} textAlign={'center'}>{isSignup ? 'Signup':'Login'}</Typography>
      {isSignup && <TextField name='name' value={inputs.name} autoComplete="on" onChange={handlechange} placeholder='Name'  margin='normal'/>}{""}
      <TextField name='email' value={inputs.email} autoComplete="on" onChange={handlechange} type={'email'} placeholder='Email'  margin='normal'/>
      <TextField name='password' value={inputs.password} autoComplete="on" onChange={handlechange} type={'password'} placeholder='Password' margin='normal'/>
      <Button type='submit'
      variant="contained" 
      sx={{borderRadius:3,marginTop:3}}
      color='warning'>
        Submit
      </Button>
      <Button onClick={()=>setIsSignup(!isSignup)}
      sx={{borderRadius:3, marginTop:3}}>
        Change To {isSignup ? 'Login':'Signup'}</Button>
      </Box>
      
    </form>
    </div>
  )
}

export default Auth