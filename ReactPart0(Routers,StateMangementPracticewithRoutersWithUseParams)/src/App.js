import React from 'react';
import CreateOne from './components/Pages/CreateOne'
import './App.css';
import ShowAll from './components/Pages/ShowAll';
import ShowOne from './components/Pages/ShowOne';
import { useState } from 'react';
import CreateOneRef from './components/Pages/CreateOneRef';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';

function App() {
  const [people, setPeople] = useState(['Mike', 'Sarah', 'Ryan'])
  console.log(people)
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/createOne' element={<CreateOne setPeople={setPeople} />}/>
        <Route path='/createOneRef' element={<CreateOneRef setPeople={setPeople} />}/>
        <Route path='/showAll' element={<ShowAll people={people} />}/>
        <Route path='/showAll/:idx' element={<ShowOne people={people}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
