import React from 'react';

import './App.css';
import TestAddress from './components/TestAddress';
import TestCount from './components/TestCount';


function App() {
  return (
    <>
    <div className="app">
     <TestCount/>
    </div>
    <div className="app">
     <TestAddress/>
    </div>
    </>
  );
}

export default App;
