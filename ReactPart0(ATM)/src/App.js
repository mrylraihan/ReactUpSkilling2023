import React from 'react';

import './App.css';
import Account from './components/Account';


function App() {
  return (
    <div className="app">
     <Account title={'checking'} total={1000}/>
     <Account title={'Savings'} total={3000}/>
    </div>
  );
}

export default App;
