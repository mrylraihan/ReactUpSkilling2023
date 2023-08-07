import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import ShowAll from './components/ShowAll';
import ShowSingle from './components/ShowSingle';


function App() {
  const data = ['Wallie', 'Meshia', 'Heshow']
  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <Routes>
        <Route path='/' element={<ShowAll data={data}/>}/>
        <Route path='/:idx' element={<ShowSingle data={data}/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
