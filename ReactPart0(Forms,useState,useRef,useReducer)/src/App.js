import React from 'react';

import './App.css';
import OnChangeForm from './components/OnChangeForm';
import UseReducerForm from './components/UseReducerForm';
import UseRefForm from './components/UseRefForm';
import UseStateForm from './components/UseStateForm';
import UseStateForm2 from './components/UseStateForm2';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <UseStateForm/>
    <UseStateForm2/>
    <UseRefForm/>
    <UseReducerForm/>
    <OnChangeForm/>
    </>
  );
}

export default App;
