import React from 'react';

import './App.css';
import TestReducer from './components/TestReducer';
import TestRedux from './components/TestRedux';
import TestState from './components/TestState';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <TestState/>
    <TestReducer/>
    <TestRedux/>
    </>
  );
}

export default App;
