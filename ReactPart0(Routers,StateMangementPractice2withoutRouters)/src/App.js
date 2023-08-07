import React from 'react';
import CreateOne from './components/Pages/CreateOne'
import './App.css';
import ShowAll from './components/Pages/ShowAll';
import ShowOne from './components/Pages/ShowOne';
import { useState } from 'react';
import CreateOneRef from './components/Pages/CreateOneRef';


function App() {
  const [people, setPeople] = useState(['Mike', 'Sarah', 'Ryan'])
  const [person, setPerson] = useState('')
  console.log(people)
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <CreateOne setPeople={setPeople}/>
      <CreateOneRef setPeople={setPeople}/>
      <ShowOne person={person} setPerson={setPerson}/>
      <ShowAll people={people} setPerson={setPerson}/>
    </>
  );
}

export default App;
