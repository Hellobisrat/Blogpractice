import Blogs from './components/Blogs'
import Auth from'./components/Auth'
import Header from "./components/Header";
import BlogsDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import UserBlogs from './components/UserBlogs'
import React from "react";
import {Route,Routes} from 'react-router-dom'
function App() {

  return <React.Fragment>
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
  
 


}

export default App;
