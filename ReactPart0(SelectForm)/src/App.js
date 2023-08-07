import React from 'react';

import './App.css';
import SelectForm from './components/SelectForm';
import SelectFormSimple from './components/SelectFormSimple';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <SelectForm/>
      <SelectFormSimple/>
    </>
  )
}

export default App;
