import React from 'react';

import './App.css';
import TimerComp from './components/TimerComp';
import FormUseState from './components/FormUseState'
import FormUseReducer from './components/FormUseReducer'
function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <TimerComp/>
    <FormUseState/>
    <FormUseReducer/>
    </>
  );
}

export default App;
