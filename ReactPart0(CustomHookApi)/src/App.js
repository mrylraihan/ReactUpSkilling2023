import React from 'react';

import './App.css';
import TestApiCustomHook from './components/TestApiCustomHook';
import TestApiCustomHook2 from './components/TestApiCustomHook2';


function App() {
  return (
    <>
    <div className="app">
      <TestApiCustomHook/>
    </div>
    <div className="app">
      <TestApiCustomHook2/>
    </div>
    </>
  );
}

export default App;
