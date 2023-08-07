import React from 'react'
import './App.css';

import TestReducer1 from './components/TestReducer1';
import TestReducer2CustomHook from './components/TestReducer2CustomHook';

function App() {

  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
   <TestReducer1/> 
   <TestReducer2CustomHook/>
    </>
  );
}

export default App;
