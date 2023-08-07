import React from 'react';

import './App.css';
import UseReducerTest from './components/UseReducerTest';
import UseStateTest from './components/UseStateTest';


function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <UseReducerTest/>
      <UseStateTest/>
    </div>
  );
}

export default App;
