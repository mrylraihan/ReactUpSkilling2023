import React from 'react';

import './App.css';
import TestRefForm from './components/TestRef/TestRefForm';
import TestState1 from './components/TestState/TestState1';
import TestState2 from './components/TestState/TestState2';
import Test1UE from './components/TestUseEffect/Test1UE';
import Test2UE from './components/TestUseEffect/Test2UE';
import Test3UE from './components/TestUseEffect/Test3UE';
import TestReducer from './components/TestUseReducer/TestReducer';
import TestReducer2 from './components/TestUseReducer/TestReducer2';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <Test1UE/>
    <Test2UE/>
    <Test3UE/>
    <TestRefForm/>
    <TestState1/>
    <TestState2/>
    <TestReducer/>
    <TestReducer2/>
    </>
  );
}

export default App;
