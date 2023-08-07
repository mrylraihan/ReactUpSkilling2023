import React from 'react';

import './App.css';
import CreatePost from './components/CreatePost';
import GetAll from './components/GetAll';
import GetById from './components/GetById';


function App() {
  return (
    <div className="app">
      <CreatePost/>
      <GetById/>
      <GetAll/>
    </div>
  );
}

export default App;
