import React from 'react';

import './App.css';
import GetFetch from './components/GetFetch';
import Test from './components/Test';


function App() {
  return (
    <>
    <div className="app">
     <Test/>
    </div>
    <div className="app">
     <GetFetch/>
    </div>
    
    </>
  );
}

export default App;
