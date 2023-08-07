import React, { useEffect, useState } from 'react';

import './App.css';


function App() {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)
  useEffect(()=>{
    if(start){
      setTimeout(() => {
        setCount(prev=>++prev)
      }, 1000);
    }
  })
  const startTimer = () =>{
    setStart(!start)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <h2>{count}</h2>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
}

export default App;
