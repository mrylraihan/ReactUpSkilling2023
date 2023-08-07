import React from 'react';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import More from './components/Pages/More';
import ShowAll from './components/Pages/ShowAll';
import ShowOne from './components/Pages/ShowOne';


function App() {
  const peopleList = ['Wallie', 'Heshow', 'Meshia']

  return (
    <Router>
    <div className="app">
      <Navbar/>
    </div>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/showAll' element={<ShowAll people={peopleList}/>}/>
        <Route path='/showAll/:idx' element={<ShowOne people={peopleList}/>}/>
    <Route path='/more' element={<More/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>

    
    </Router>
  );
}

export default App;
