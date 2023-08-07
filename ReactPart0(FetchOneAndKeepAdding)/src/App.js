import React, { useEffect, useState } from 'react';

import './App.css';
import AddOne from './components/AddOne';
import ShowAll from './components/ShowAll';


function App() {
const [list, setList] = useState([])
const arr = ['Wallie', 'Meshia', 'Mike']

useEffect(()=>{
  setList(arr)
},[])

console.log(list);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <AddOne setList={setList} data={list}/>
      <ShowAll data={list}/>
    </div>
  );
}

export default App;
