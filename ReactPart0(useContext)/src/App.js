import React from 'react';
import { useState } from 'react';

import './App.css';
import GetData from './components/GetData';
import ShowData from './components/ShowData';
import NameContext from './store/name-context';


function App() {
  const [name, setName] = useState('')
  return (
    <NameContext.Provider value={{name, setName}}>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <GetData/>
    <ShowData/>
    </NameContext.Provider>
  );
}

export default App;
