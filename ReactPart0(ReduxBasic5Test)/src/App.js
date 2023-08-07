import React from 'react';

import './App.css';
import CounterRedux from './components/CounterRedux';
import CounterReducer from './components/CounterReducer';


function App() {
  return (
   <>
      <div className="app">
        <CounterRedux />
      </div>
      <div className="app">
        <CounterReducer />
      </div>
   </>
  );
}

export default App;
