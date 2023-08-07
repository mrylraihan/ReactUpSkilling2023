import React from 'react';

import './App.css';
import TestTouched from './components/TestTouched';
import TestTouched2 from './components/TestTouched2';


function App() {
  return (
    <>
    <div className="app">
      <h4>Hi there!</h4>
    </div>
    <TestTouched/>
    <TestTouched2/>
    </>
  );
}

export default App;
