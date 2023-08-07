import React from 'react';

import './App.css';
import { DataProvider } from './context/dataContext';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DataProvider>
      <HomePage/>
      </DataProvider>
    </div>
  );
}

export default App;
