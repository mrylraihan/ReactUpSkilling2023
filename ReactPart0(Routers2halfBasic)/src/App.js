import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './component/nav/Navbar';
import Home from './component/pages/Home';
import Extra from './component/pages/Extra';
import SeeAll from './component/pages/SeeAll';
import SinglePost from './component/pages/SinglePost';
import { useEffect, useState } from 'react';
import AddPost from './component/pages/AddPost';

function App() {
  const [list, setList] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setList)
      .catch(console.error)
  },[])
  console.log(list)
  return (
    <Router>
    <div className="app">
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/extra' element={<Extra/>}/>
      <Route path='/all' element={<SeeAll list={list}/>}/>
        <Route path='/all/:id' element={<SinglePost list={list} />}/>
        <Route path='/add' element={<AddPost setList={setList}/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
