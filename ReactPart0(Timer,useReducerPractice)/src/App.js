import React from 'react';
import Timer from './components/Timer.jsx'
import ReducerPractice from './components/ReducerPractice.jsx'
import TestCustomHook from './components/TestCustomHook.jsx'
import TestCustomHook2 from './components/TestCustomHook2.jsx'
import './App.css';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <Timer/>
    <ReducerPractice/>
    <TestCustomHook/>
    <TestCustomHook2/>
    </>
  );
}

export default App;
