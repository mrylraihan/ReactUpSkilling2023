
import { useState } from 'react';
import './App.css';
import TestContextComp from './components/TestContextComp';
import TestContextComp2 from './components/TestContextComp2';
import TestReduxComp from './components/TestReduxComp';
import TestContext from './contextStore/test-context';
import TestReduxComp2 from './components/TestReduxComp2';

function App() {
  const [name, setName]= useState('')
  return (
    <>
    <div className="app">
      <h1>Context vs Redux/toolKit</h1>
    </div>
    <TestContext.Provider value={{name, setName}} >
    <TestContextComp/>
    <TestContextComp2/>
    </TestContext.Provider>
    <TestReduxComp/>
    <TestReduxComp2/>
    </>
  );
}

export default App;
