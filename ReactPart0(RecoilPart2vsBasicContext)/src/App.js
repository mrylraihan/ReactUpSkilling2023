import NameContext from './store/name-context';
import './App.css';
import Level1 from './Components/Level1';
import Level2 from './Components/Level2';
import { useState } from 'react';

function App() {
  const [name, setName]= useState({
    firstName: '',
    lastName: '',
    fullName: ''
  })
  return (
    <NameContext.Provider value={{name, setName}}>
      <Level1/>
      <Level2/>
    </NameContext.Provider>
  );
}

export default App;
