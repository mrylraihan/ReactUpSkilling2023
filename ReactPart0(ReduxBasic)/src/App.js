import React from 'react';

import './App.css';
import NameReducerComp from './components/NameReducerComp';
import NameReduxComp from './components/NameReduxComp';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
      <NameReduxComp/>
    </div>
    <div className='app'>
      <NameReducerComp/>
    </div>
    </>
  );
}

export default App;
