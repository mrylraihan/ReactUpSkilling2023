import React, { useState } from 'react';

import './App.css';
import Search from './components/Search';
import SearchRef from './components/SearchRef';
import TestForEach from './components/TestForEach';
import TestMap from './components/TestMap';


function App() {
  const [people, setPeople] = useState(['Meshia', 'Heshow', 'Wallie'])
  return (
    <>
      <div className="app">
        <h1>Hi there!</h1>
      </div>
      <TestForEach people={people} />
      <TestMap people={people} />
      <div style={{display:'flex'}}>
        <Search people={people}/>
        <SearchRef people={people} />
      </div>
    </>
  );
}

export default App;
