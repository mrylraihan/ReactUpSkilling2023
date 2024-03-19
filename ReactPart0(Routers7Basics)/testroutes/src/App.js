import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Single from './components/Single'
import About from './components/About'
import Post from './components/Post'
function App() {
  return (
    <>
    <Router>
    <div className='app'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/post"><li>Post</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </div>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/post'} element={<Post/>}/>
        <Route path={'/post/:id'} element={<Single/>}/>
        <Route />
      </Routes>
    </Router>
    </>
  )
}

export default App
