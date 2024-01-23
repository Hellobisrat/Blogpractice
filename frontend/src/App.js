import Blogs from './components/Blogs.jsx'
import Auth from'./components/Auth.jsx'
import Header from "./components/Header.jsx";
import BlogsDetails from "./components/BlogDetails.jsx";
import AddBlog from "./components/AddBlog.jsx";
import UserBlogs from './components/UserBlogs.jsx'
import React from "react";
import {Route,Routes} from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  return (
  
  <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/myBlogs' element={<UserBlogs/>}/>
        <Route path='/myBlogs/:id' element={<BlogsDetails/>}/>
        <Route path='/blogs/add' element={<AddBlog/>}/>
      </Routes>
    </main>
  </React.Fragment>
  
  )
 


}

export default App;
