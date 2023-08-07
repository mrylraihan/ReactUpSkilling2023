import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import All from './components/pages/All';
import About from './components/pages/About';
import More from './components/pages/More';
import One from './components/pages/One';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPost] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPost)
    .catch(console.error)
  },[])

  return (
    <Router> 
    <div className="app">
      <Navbar/>
    </div>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={`/all`} element={<All posts={posts}/>}/>
        <Route path={`/all/:id`} element={<One/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/more`} element={<More/>}/>
    </Routes>
    </Router>
  );
}

export default App;
