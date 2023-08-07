import React from 'react';

import './App.css';
import Test1 from './components/WithFlex/Test1';
import Test1WO from './components/WithOutFlex/Test1WO';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <Test1WO/>
    <Test1/>
    </>
  );
}

export default App;
