import React from 'react';

import './App.css';
import FormBundleState from './components/FormBundleState';
import FormOnSubmitOnchange from './components/FormOnSubmitOnchange';
import FormState from './components/FormState';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <FormState/>
    <FormBundleState/>
    <FormOnSubmitOnchange/>
    </>
  );
}

export default App;
