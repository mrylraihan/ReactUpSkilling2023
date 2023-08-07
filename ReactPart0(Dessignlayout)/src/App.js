import React from 'react';

import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
      <Test1/>
    </div>
    <div className='gridDisplay'>
    <Test2/>
    <Test3/>
    </div>
    </>
  );
}

export default App;
