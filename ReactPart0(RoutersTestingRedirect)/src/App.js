import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Single from './components/Pages/Single';
import TestForAlan from './components/Pages/TestForAlan'
// const DUMMY_DATA = [
//   'Sophie', 'Alan', 'Amber', 'Alejandro', 'Wallie'
// ]
function App() {
  const [people, setPeople] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPeople)
    .catch(console.error)
  },[])
  console.log(people)
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path={'/'} element={<Home people={people}/>}/>
        <Route path={'/:cat'} element={<Single people={people}/>} />
      <Route path={'/About'} element={<About/>}/>
        <Route path={'/test'} element={<TestForAlan people={people}/>}/>
    </Routes>

    </Router>
  );
}

export default App;
