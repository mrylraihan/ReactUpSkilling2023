import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Extras from './components/pages/Extras'
import SeeAll from './components/pages/SeeAll'
import SeeOne from './components/pages/SeeOne'
import Add from './components/pages/Add';

const DUMMY_Data = [
  { name: 'Wallie', id: 0 },
  { name: 'Heshow', id: 1 },
  { name: 'Meshia', id: 2 },
]

function App() {
  const [people, setPeople] = useState(DUMMY_Data)
  console.log(people)
  return (
    <Router>
     <Navbar/>
    <Routes>
      <Route path={`/`} element={<Home/>}/>
      <Route path={`/about`} element={<About/>}/>
      <Route path={`/extra`} element={<Extras/>}/>
      <Route path={`/all`} element={<SeeAll people={people}/>}/>
      <Route path={`/all/:idx`} element={<SeeOne people={people}/>}/>
      <Route path={`/add`} element={<Add setPeople={setPeople}/>}/>
    </Routes>
    </Router>
  );
}

export default App;
